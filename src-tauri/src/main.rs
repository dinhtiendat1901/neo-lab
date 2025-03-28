// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::os::windows::process::CommandExt;
use std::process::{Child, Command, Stdio};
use std::sync::{Arc, Mutex};

mod command;
mod db;
mod repository;
mod service;

const CREATE_NO_WINDOW: u32 = 0x08000000;

// Struct to manage a generic external process
struct ExternalProcess {
    process: Option<Child>,
}

impl ExternalProcess {
    fn new(command: &str, args: &[&str]) -> Self {
        let process = Command::new(command)
            .args(args)
            .creation_flags(CREATE_NO_WINDOW)
            .stdout(Stdio::null())
            .stderr(Stdio::null())
            .spawn()
            .expect(&format!("Failed to start {}", command));

        ExternalProcess {
            process: Some(process),
        }
    }

    fn kill(&mut self) {
        if let Some(mut process) = self.process.take() {
            match process.kill() {
                Ok(_) => {
                    println!("Process killed.");
                    let _ = process.wait(); // Ensure process has been terminated
                }
                Err(e) => eprintln!("Failed to kill process: {}", e),
            }
        }
    }
}

fn main() {
    let redis_server = Arc::new(Mutex::new(ExternalProcess::new(
        "./binaries/Redis-7.4.1-Windows-x64-cygwin/redis-server.exe",
        &["--port", "6379"],
    )));

    let redis_server_clone = Arc::clone(&redis_server);

    tauri::Builder::default()
        .on_window_event(move |_window, event| {
            if let tauri::WindowEvent::CloseRequested { .. } = event {
                println!("Window close requested. Killing external processes...");
                {
                    let mut server = redis_server_clone.lock().unwrap();
                    server.kill();
                }
            }
        })
        .invoke_handler(tauri::generate_handler![
            command::student_command::get_all_students,
            command::student_command::create_student,
            command::student_command::delete_student
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

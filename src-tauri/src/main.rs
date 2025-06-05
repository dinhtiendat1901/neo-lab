// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod command;
mod db;
mod repository;
mod service;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            command::student_command::get_all_students,
            command::student_command::create_student,
            command::student_command::delete_student
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

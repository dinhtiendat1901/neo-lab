import {Button, Group, Modal, NumberInput, ScrollArea, Stack, Text} from '@mantine/core';
import {Dropzone, FileWithPath, MIME_TYPES} from "@mantine/dropzone";
import {IconPhoto, IconUpload, IconX} from "@tabler/icons-react";
import React, {useState} from "react";
import classes from '../../css/Border.module.css'
import Document from "./Document.tsx";


interface CreateModalProp {
    close: () => void;
    opened: boolean;
}


export default function CreateModal({close, opened}: CreateModalProp) {
    const [listDocument, setListDocument] = useState([])


    function handleClickRemove(document_name) {
        setListDocument(prev => prev.filter(doc => doc.name !== document_name))
    }

    function handleClickDrop(files: FileWithPath[]) {
        // map each File to our { name, type } shape
        const newDocs = files.map((file) => {
            const name = file.name;
            // grab extension (after last dot)
            const ext = name.split(".").pop()?.toLowerCase() ?? "";

            // normalize a few common cases
            let type: string;
            if (["doc", "docx"].includes(ext)) {
                type = "docx";
            } else if (ext === "pdf") {
                type = "pdf";
            } else if (["xls", "xlsx"].includes(ext)) {
                type = "excel";
            } else if (
                ["png", "jpg", "jpeg", "gif", "bmp", "webp"].includes(ext)
            ) {
                type = "image";
            } else {
                // fallback to the raw extension
                type = ext;
            }

            return {name, type};
        });

        // optional: filter out files already in the list
        setListDocument((prev) => {
            const existing = new Set(prev.map((d) => d.name));
            const filtered = newDocs.filter((d) => !existing.has(d.name));
            return [...prev, ...filtered];
        });
    }


    return (
        <Modal opened={opened} onClose={close} size='lg' closeOnClickOutside={false}>
            <Stack>
                <Dropzone
                    onDrop={handleClickDrop}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={5 * 1024 ** 2}
                    accept={[
                        MIME_TYPES.docx,
                        MIME_TYPES.xlsx,
                        MIME_TYPES.pdf
                    ]}
                >
                    <Group justify="center" gap="xl" mih={220} style={{pointerEvents: 'none'}}>
                        <Dropzone.Accept>
                            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5}/>
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5}/>
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5}/>
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Attach as many files as you like, each file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>

                <ScrollArea h={200} className={classes.group} p={8}>
                    {listDocument.map(document => (
                        <Document name={document.name} type={document.type} handleClick={handleClickRemove}/>
                    ))}
                </ScrollArea>

                <NumberInput fw={700}
                             allowNegative={false}
                             max={2048}
                             min={512}
                             step={5}
                             withAsterisk
                             label="ChunkSize"/>
                <NumberInput fw={700}
                             allowNegative={false}
                             max={2048}
                             min={512}
                             step={5}
                             withAsterisk
                             label="ChunkOverlap"/>
                <Group justify="flex-end" mt="md">
                    <Button type="submit"><Text fw={700}>Embed</Text></Button>
                </Group>
            </Stack>

        </Modal>
    );
}
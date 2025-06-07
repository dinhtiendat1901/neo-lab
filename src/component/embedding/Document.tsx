import {CloseButton, Group, Text} from "@mantine/core";
import {IconFileExcel, IconFileTypePdf, IconFileWord} from "@tabler/icons-react";
import React from "react";

interface DocumentProp {
    name: string,
    type: string,
    handleClick: (document_name: string) => void
}


export default function Document({name, type, handleClick}: DocumentProp) {
    return (
        <Group justify='space-between'>
            <Group gap={5}>
                {
                    type === "docx" ? <IconFileWord color='blue'/> : type === "pdf" ?
                        <IconFileTypePdf color='brown'/> : type === "excel" ?
                            <IconFileExcel color='green'/> : null
                }
                <Text>{name}</Text>
            </Group>
            <CloseButton size={25} onClick={() => {
                handleClick(name)
            }}/>
        </Group>
    )
}
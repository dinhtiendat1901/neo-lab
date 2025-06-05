import {ActionIcon, Stack, Text} from "@mantine/core";
import {IconFileExcel, IconFileTypePdf, IconFileWord} from "@tabler/icons-react";

interface DocumentProp {
    name: string,
    type: string,
    handleClick: (document_name: string) => void
}

export default function Document({name, type, handleClick}: DocumentProp) {
    return (
        <Stack align='center' gap='2px'>
            <ActionIcon variant='subtle' pl='5' pr='5' size={50} onClick={() => {
                handleClick(name)
            }}>
                {
                    type === "docx" ? <IconFileWord size={50} color='blue'/> : type === "pdf" ?
                        <IconFileTypePdf size={50} color='brown'/> : type === "excel" ?
                            <IconFileExcel size={50} color='green'/> : null
                }
            </ActionIcon>
            <Text size='11px'>{name}</Text>
        </Stack>
    )

}
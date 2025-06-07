import {ActionIcon, Group, Table, Text} from "@mantine/core";
import React, {useState} from "react";
import {IconFileExcel, IconFileTypePdf, IconFileWord, IconTrash} from "@tabler/icons-react";

import {useDisclosure} from "@mantine/hooks";
import DeleteModal from "./DeleteModal.tsx";
import {listEmbeddingData} from "../../utils/data.ts";


export default function TableBody() {

    const [deleteModalOpened, deleteModalCtl] = useDisclosure(false);
    const [deleteStudentId, setDeleteStudentId] = useState(0);


    function handleClickDelete(id: number) {
        setDeleteStudentId(id);
        deleteModalCtl.open()
    }


    return (
        <>
            <Table.Tbody>{listEmbeddingData.map((embedding) => (
                <Table.Tr key={embedding.id}>
                    <Table.Td>
                        <Group>
                            {
                                embedding.type === "docx" ? <IconFileWord color='blue'/> : embedding.type === "pdf" ?
                                    <IconFileTypePdf color='brown'/> : embedding.type === "excel" ?
                                        <IconFileExcel color='green'/> : null
                            }<Text fw={700}>{embedding.name}</Text>
                        </Group>
                    </Table.Td>
                    <Table.Td><Text fw={700}>{embedding.type}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{embedding.chunkSize}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{embedding.chunkOverlap}</Text></Table.Td>
                    <Table.Td>
                        <ActionIcon variant='subtle' color='red' pl='5' pr='5' onClick={() => {
                            handleClickDelete(embedding.id)
                        }}><IconTrash
                            size={21}/></ActionIcon>
                    </Table.Td>
                </Table.Tr>))
            }</Table.Tbody>
            <DeleteModal opened={deleteModalOpened} close={deleteModalCtl.close} studentId={deleteStudentId}/>
        </>
    )
}
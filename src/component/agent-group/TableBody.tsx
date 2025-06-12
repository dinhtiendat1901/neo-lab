import {ActionIcon, Table, Text} from "@mantine/core";
import React, {useState} from "react";
import {IconTrash} from "@tabler/icons-react";

import {useDisclosure} from "@mantine/hooks";
import DeleteModal from "./DeleteModal.tsx";
import {listMultiAgentData} from "../../utils/data.ts";


export default function TableBody() {


    const [deleteModalOpened, deleteModalCtl] = useDisclosure(false);
    const [deleteStudentId, setDeleteStudentId] = useState(0);


    function handleClickDelete(id: number) {
        setDeleteStudentId(id);
        deleteModalCtl.open()
    }


    return (
        <>
            <Table.Tbody>{listMultiAgentData.map((multiAgent) => (
                <Table.Tr key={multiAgent.id}>
                    <Table.Td><Text fw={700}>{multiAgent.name}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{multiAgent.leader}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{multiAgent.agentCount}</Text></Table.Td>
                    <Table.Td>
                        <ActionIcon variant='subtle' color='red' pl='5' pr='5' onClick={() => {
                            handleClickDelete(multiAgent.id)
                        }}><IconTrash
                            size={21}/></ActionIcon>
                    </Table.Td>
                </Table.Tr>))
            }</Table.Tbody>
            <DeleteModal opened={deleteModalOpened} close={deleteModalCtl.close} studentId={deleteStudentId}/>
        </>
    )
}
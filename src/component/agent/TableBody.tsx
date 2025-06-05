import {ActionIcon, Table, Text} from "@mantine/core";
import React, {useState} from "react";
import {IconSettings, IconTrash} from "@tabler/icons-react";

import {useDisclosure} from "@mantine/hooks";
import DeleteModal from "./DeleteModal.tsx";
import {listAgentData} from "../../utils/data.ts";


export default function TableBody() {
    const [deleteModalOpened, deleteModalCtl] = useDisclosure(false);
    const [deleteStudentId, setDeleteStudentId] = useState(0);

    function handleClickDelete(id: number) {
        setDeleteStudentId(id);
        deleteModalCtl.open()
    }

    return (
        <>
            <Table.Tbody>{listAgentData.map((agent) => (
                <Table.Tr key={agent.id}>
                    <Table.Td><Text fw={700}>{agent.name}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{agent.role}</Text></Table.Td>
                    <Table.Td><Text fw={700}>{agent.description}</Text></Table.Td>
                    <Table.Td>
                        <ActionIcon variant='subtle' color='blue' pl='5' pr='5' onClick={() => {
                            handleClickDelete(agent.id)
                        }}><IconSettings
                            size={21}/></ActionIcon>
                        <ActionIcon variant='subtle' color='red' pl='5' pr='5' onClick={() => {
                            handleClickDelete(agent.id)
                        }}><IconTrash
                            size={21}/></ActionIcon>
                    </Table.Td>
                </Table.Tr>))
            }</Table.Tbody>
            <DeleteModal opened={deleteModalOpened} close={deleteModalCtl.close} studentId={deleteStudentId}/>
        </>
    )
}
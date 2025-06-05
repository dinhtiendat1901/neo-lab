import {Button, Container, Group, Modal, Space, Stack, Tabs, Text} from '@mantine/core';
import {IconInfoCircle, IconKey, IconTool} from "@tabler/icons-react";
import InfoTab from "./InfoTab.tsx";
import ToolTab from "./ToolTab.tsx";


interface CreateModalProp {
    close: () => void;
    opened: boolean;
}


export default function CreateModal({close, opened}: CreateModalProp) {

    return (
        <Modal opened={opened} onClose={close} size='xl' closeOnClickOutside={false} fullScreen styles={{
            body: {
                height: '94%'
            }
        }}>
            <Stack justify='space-between' h='100%'>
                <Tabs defaultValue="gallery">
                    <Tabs.List grow>
                        <Tabs.Tab value="gallery" leftSection={<IconInfoCircle size={12}/>}>
                            Information
                        </Tabs.Tab>
                        <Tabs.Tab value="messages" leftSection={<IconTool size={12}/>}>
                            Tool & Knowledge
                        </Tabs.Tab>
                        <Tabs.Tab value="settings" leftSection={<IconKey size={12}/>}>
                            Permission
                        </Tabs.Tab>
                    </Tabs.List>
                    <Space h={27}/>
                    <Container fluid p={0}>
                        <InfoTab/>
                        <ToolTab/>

                        <Tabs.Panel value="settings">
                            Settings tab content
                        </Tabs.Panel>
                    </Container>
                </Tabs>

                <Group justify="flex-end" mt="md">
                    <Button type="submit"><Text fw={700}>Create</Text></Button>
                </Group>
            </Stack>

        </Modal>
    );
}
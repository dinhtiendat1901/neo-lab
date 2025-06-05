import {Group, Stack} from "@mantine/core";

import AgentTable from "../component/agent/AgentTable.tsx";
import ActionButton from "../component/agent/ActionButton.tsx";

export default function AgentPage() {

    return <Stack gap='sm'>
        <Stack mt={70}>
            <Group justify='flex-end'>
                <ActionButton/>
            </Group>
            <AgentTable/>
        </Stack>
    </Stack>
}
import {Group, Stack} from "@mantine/core";

import MultiAgentTable from "../component/agent-group/MultiAgentTable.tsx";
import ActionButton from "../component/agent-group/ActionButton.tsx";

export default function MultiAgentPage() {
    return <Stack gap='sm'>
        <Stack mt={70}>
            <Group justify='flex-end'>
                <ActionButton/>
            </Group>
            <MultiAgentTable/>
        </Stack>
    </Stack>
}
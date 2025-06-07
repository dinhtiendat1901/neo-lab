import {Group, Stack} from "@mantine/core";

import EmbedTable from "../component/embedding/EmbedTable.tsx";
import ActionButton from "../component/embedding/ActionButton.tsx";

export default function EmbeddingPage() {
    return <Stack gap='sm'>
        <Stack mt={70}>
            <Group justify='flex-end'>
                <ActionButton/>
            </Group>
            <EmbedTable/>
        </Stack>
    </Stack>
}
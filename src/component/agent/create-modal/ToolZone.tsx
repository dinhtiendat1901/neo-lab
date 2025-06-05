import {Group, Stack, Switch, Text} from "@mantine/core";
import {IconMoonStars, IconSun} from "@tabler/icons-react";

export default function ToolZone() {
    return (
        <Stack w='30%'>
            <Text fw={900}>Select Tool:</Text>
            <Stack align='flex-start' w='100%'>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Search Web</Text>
                </Group>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Search Document</Text>
                </Group>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Search Information</Text>
                </Group>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Generate Image</Text>
                </Group>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Caculate Film</Text>
                </Group>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Search Web</Text>
                </Group>
                <Group>
                    <Switch
                        size="md"
                        color="dark.4"
                        onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)"/>}
                        offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)"/>}
                    />
                    <Text fw={900}>Search Web</Text>
                </Group>


            </Stack>
        </Stack>
    )
}
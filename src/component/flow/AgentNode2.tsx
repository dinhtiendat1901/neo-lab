import {Accordion, Group, Paper, rem, ScrollArea, Space, Stack, Switch, Text} from "@mantine/core";
import classes from "../../css/Border.module.css";
import {IconFileExcel, IconFileTypePdf, IconFileWord, IconMoonStars, IconSun} from "@tabler/icons-react";
import React from "react";
import {Handle, Position} from "@xyflow/react";

export default function AgentNode2() {
    return (
        <>

            <Stack align='center' className={classes.group} bg='#f8f9fa' w='300'>
                <Text fw={900}>Agent</Text>
                <Accordion>
                    <Accordion.Item key={1} value={'hi'}>
                        <Accordion.Control icon={'ℹ️'}>Information</Accordion.Control>
                        <Accordion.Panel>
                            <Text fw={900}>Description:</Text>
                            <ScrollArea h={200}>
                                <Paper p='xs' bg='cyan'>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem expedita in
                                        quam
                                        repellat sint. Corporis deserunt dolore ducimus eius eos expedita harum,
                                        maxime
                                        modi
                                        molestiae, praesentium qui quibusdam quidem quos.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, explicabo
                                        fuga iure necessitatibus officiis perferendis quos? A excepturi quos sit vel
                                        voluptatem. Aliquid cumque deserunt est provident quas rem repudiandae!
                                    </Text>
                                </Paper>
                            </ScrollArea>
                            <Space h='20'/>
                            <Text fw={900}>Prompt:</Text>
                            <ScrollArea h={200}>
                                <Paper p='xs' bg='cyan'>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem expedita in
                                        quam
                                        repellat sint. Corporis deserunt dolore ducimus eius eos expedita harum,
                                        maxime
                                        modi
                                        molestiae, praesentium qui quibusdam quidem quos.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, explicabo
                                        fuga iure necessitatibus officiis perferendis quos? A excepturi quos sit vel
                                        voluptatem. Aliquid cumque deserunt est provident quas rem repudiandae!
                                    </Text>
                                </Paper>
                            </ScrollArea>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item key={2} value={'hi1'}>
                        <Accordion.Control icon={'⚙️'}>Tool & Document</Accordion.Control>
                        <Accordion.Panel>
                            <Text fw={900}>Document:</Text>
                            <Group gap='2'>
                                <IconFileWord color='blue' style={{width: rem(15), height: rem(20)}}/>
                                <Text>Helper.docx</Text>
                            </Group>
                            <Group gap='2'>
                                <IconFileTypePdf color='brown' style={{width: rem(15), height: rem(20)}}/>
                                <Text>Helper1.pdf</Text>
                            </Group>
                            <Group gap='2'>
                                <IconFileExcel color='green' style={{width: rem(15), height: rem(20)}}/>
                                <Text>Document.excel</Text>
                            </Group>
                            <Group gap='2'>
                                <IconFileWord color='blue' style={{width: rem(15), height: rem(20)}}/>
                                <Text>Meta1.docx</Text>
                            </Group>
                            <Space h={10}/>
                            <Text fw={900}>Tool:</Text>
                            <Group>
                                <Switch
                                    size="md"
                                    color="dark.4"
                                    onLabel={<IconSun size={16} stroke={2.5}
                                                      color="var(--mantine-color-yellow-4)"/>}
                                    offLabel={<IconMoonStars size={16} stroke={2.5}
                                                             color="var(--mantine-color-blue-6)"/>}
                                />
                                <Text fw={900}>Search Web</Text>
                            </Group>
                            <Group>
                                <Switch
                                    size="md"
                                    color="dark.4"
                                    onLabel={<IconSun size={16} stroke={2.5}
                                                      color="var(--mantine-color-yellow-4)"/>}
                                    offLabel={<IconMoonStars size={16} stroke={2.5}
                                                             color="var(--mantine-color-blue-6)"/>}
                                />
                                <Text fw={900}>Search Document</Text>
                            </Group>
                            <Group>
                                <Switch
                                    size="md"
                                    color="dark.4"
                                    onLabel={<IconSun size={16} stroke={2.5}
                                                      color="var(--mantine-color-yellow-4)"/>}
                                    offLabel={<IconMoonStars size={16} stroke={2.5}
                                                             color="var(--mantine-color-blue-6)"/>}
                                />
                                <Text fw={900}>Search Information</Text>
                            </Group>
                            <Group>
                                <Switch
                                    size="md"
                                    color="dark.4"
                                    onLabel={<IconSun size={16} stroke={2.5}
                                                      color="var(--mantine-color-yellow-4)"/>}
                                    offLabel={<IconMoonStars size={16} stroke={2.5}
                                                             color="var(--mantine-color-blue-6)"/>}
                                />
                                <Text fw={900}>Generate Image</Text>
                            </Group>
                            <Group>
                                <Switch
                                    size="md"
                                    color="dark.4"
                                    onLabel={<IconSun size={16} stroke={2.5}
                                                      color="var(--mantine-color-yellow-4)"/>}
                                    offLabel={<IconMoonStars size={16} stroke={2.5}
                                                             color="var(--mantine-color-blue-6)"/>}
                                />
                                <Text fw={900}>Caculate Film</Text>
                            </Group>
                            <Space h={15}/>
                            <Text fw={900}>LLM Model:</Text>
                            <Text>GPT-4o</Text>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item key={3} value={'hi2'}>
                        <Accordion.Control icon={'🎁'}>Output</Accordion.Control>
                        <Accordion.Panel>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias
                            eveniet
                            fuga laboriosam, odit officia placeat sint! Amet autem consectetur ipsa minus, officia,
                            omnis
                            praesentium quaerat quia recusandae, reiciendis rem?</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Stack>
            <Handle type="target" position={Position.Top}/>
            <Handle type="source" position={Position.Bottom}/>
        </>
    )
}
import {
    Button,
    Combobox,
    Group,
    Input,
    InputBase,
    Modal,
    Pill,
    PillsInput,
    Space,
    Stack,
    Text,
    useCombobox
} from '@mantine/core';
import React, {useState} from "react";


interface CreateModalProp {
    close: () => void;
    opened: boolean;
}


const groceries = [
    '🤖 Apples',
    '🤖 Bananas',
    '🤖 Broccoli',
    '🤖 Carrots',
    '🤖 Chocolate',
    '🤖 Grapes',
];

const groceries1 = [
    '🤖 Apples',
    '🤖 Bananas',
    '🤖 Broccoli',
    '🤖 Carrots',
    '🤖 Chocolate',
    '🤖 Grapes',
    '🤖 Agent1',
    '🤖 Agent2',
    '🤖 Agent3',
    '🤖 Agent4',
    '🤖 Agent5',
    '🤖 Agent6',
];


export default function CreateModal({close, opened}: CreateModalProp) {

    const combobox1 = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [value1, setValue1] = useState<string[]>([]);

    const handleValueSelect = (val: string) =>
        setValue1((current) =>
            current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
        );

    const handleValueRemove = (val: string) =>
        setValue1((current) => current.filter((v) => v !== val));

    const values = value1.map((item) => (
        <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
            {item}
        </Pill>
    ));

    const options1 = groceries1
        .filter((item) => !value1.includes(item))
        .map((item) => (
            <Combobox.Option value={item} key={item} active={value1.includes(item)}>
                {item}
            </Combobox.Option>
        ));
    ////////

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [value, setValue] = useState<string | null>('🤖 Apples');

    const options = groceries.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));


    return (

        <Modal opened={opened} onClose={close} size='lg' closeOnClickOutside={false}>
            <Stack>
                <Text fw={900}>Select leader:</Text>
                <Combobox
                    store={combobox}
                    withinPortal={true}
                    onOptionSubmit={(val) => {
                        setValue(val);
                        combobox.closeDropdown();
                    }}
                >
                    <Combobox.Target>
                        <InputBase
                            component="button"
                            type="button"
                            pointer
                            rightSection={<Combobox.Chevron/>}
                            onClick={() => combobox.toggleDropdown()}
                            rightSectionPointerEvents="none"
                        >
                            {value || <Input.Placeholder>Pick value</Input.Placeholder>}
                        </InputBase>
                    </Combobox.Target>
                    <Combobox.Dropdown>
                        <Combobox.Options>{options}</Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>
            </Stack>
            <Space h={23}/>
            <Stack>
                <Text fw={900}>Select Member:</Text>
                <Combobox store={combobox1} onOptionSubmit={handleValueSelect} withinPortal={true}>
                    <Combobox.DropdownTarget>
                        <PillsInput pointer onClick={() => combobox1.toggleDropdown()}>
                            <Pill.Group>
                                {values.length > 0 ? (
                                    values
                                ) : (
                                    <Input.Placeholder>Pick one or more values</Input.Placeholder>
                                )}

                                <Combobox.EventsTarget>
                                    <PillsInput.Field
                                        type="hidden"
                                        onBlur={() => combobox1.closeDropdown()}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Backspace') {
                                                event.preventDefault();
                                                handleValueRemove(value1[value1.length - 1]);
                                            }
                                        }}
                                    />
                                </Combobox.EventsTarget>
                            </Pill.Group>
                        </PillsInput>
                    </Combobox.DropdownTarget>

                    <Combobox.Dropdown>
                        <Combobox.Options>
                            {options1.length === 0 ? <Combobox.Empty>All options selected</Combobox.Empty> : options1}
                        </Combobox.Options>
                    </Combobox.Dropdown>
                </Combobox>
            </Stack>
            <Group justify="flex-end" mt="md">
                <Button type="submit"><Text fw={700}>Create</Text></Button>
            </Group>

        </Modal>
    );
}
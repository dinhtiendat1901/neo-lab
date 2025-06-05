import {Combobox, Input, InputBase, Slider, Stack, Text, useCombobox} from "@mantine/core";
import {useState} from "react";


const groceries = [
    'GPT-4o',
    'Claude 3.7',
    'Grok 3',
    'Gemini 2.5 Pro',
    'o3 mini',
    'GPT 4.1',
];

export default function LlmZone() {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [value, setValue] = useState<string | null>('GPT-4o');

    const options = groceries.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));
    return (
        <Stack w='30%'>
            <Text fw={900}>Select LLM Model:</Text>
            <Stack>
                <Combobox
                    store={combobox}
                    withinPortal={false}
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
                <Stack>
                    <Text>Temperature</Text>
                    <Slider min={0} max={1} step={0.1}/>
                </Stack>
                <Stack>
                    <Text>Top P</Text>
                    <Slider min={0} max={1} step={0.1}/>
                </Stack>

            </Stack>
        </Stack>
    )
}
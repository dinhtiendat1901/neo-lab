import {isNotEmpty, useForm} from "@mantine/form";
import {Stack, Tabs, Textarea, TextInput} from "@mantine/core";
import {handleKeyPress} from "../../../utils/utils.ts";

interface FormValue {
    name: string,
    role: string,
    description: string,
    prompt: string
}

const initialValues: FormValue = {
    name: '',
    role: '',
    description: '',
    prompt: ''
}


export default function InfoTab() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues,
        validate: {
            name: isNotEmpty('Enter your name'),
            role: isNotEmpty('Enter the role'),
            description: isNotEmpty('Enter the description'),
            prompt: isNotEmpty('Enter the description')
        },
    });


    return (
        <Tabs.Panel value="gallery">
            <form onSubmit={null}>
                <Stack>
                    <TextInput fw={700}
                               withAsterisk
                               label="Name"
                               placeholder="Agent Name"
                               key={form.key('name')}
                               {...form.getInputProps('name')}
                               onKeyPress={handleKeyPress}/>

                    <TextInput fw={700}
                               withAsterisk
                               label="Role"
                               placeholder="Role"
                               key={form.key('role')}
                               {...form.getInputProps('role')}
                               onKeyPress={handleKeyPress}/>
                    <Textarea fw={700}
                              withAsterisk
                              label="Description"
                              placeholder="Description"
                              key={form.key('description')}
                              {...form.getInputProps('description')}
                              onKeyPress={handleKeyPress}
                              styles={{
                                  input: {
                                      height: '180px'
                                  }
                              }}/>
                    <Textarea fw={700}
                              withAsterisk
                              label="Prompt"
                              placeholder="Prompt"
                              key={form.key('prompt')}
                              {...form.getInputProps('prompt')}
                              onKeyPress={handleKeyPress}
                              styles={{
                                  input: {
                                      height: '180px'
                                  }
                              }}/>
                </Stack>
            </form>
        </Tabs.Panel>
    );

}
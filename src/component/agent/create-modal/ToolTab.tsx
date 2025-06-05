import {Flex, Tabs} from "@mantine/core";
import DocumentZone from "./DocumentZone.tsx";
import ToolZone from "./ToolZone.tsx";
import LlmZone from "./LlmZone.tsx";


export default function ToolTab() {


    return (
        <Tabs.Panel value='messages'>
            <Flex gap='5%'>
                <DocumentZone/>
                <ToolZone/>
                <LlmZone/>
            </Flex>
        </Tabs.Panel>

    );

}
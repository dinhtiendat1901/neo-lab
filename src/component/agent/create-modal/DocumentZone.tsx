import {Grid, ScrollArea, Space, Stack, Text} from "@mantine/core";
import Document from "./Document.tsx";
import classes from '../../../css/Border.module.css'
import {useState} from "react";

const documents = [
    {name: "report1.docx", type: "docx"},
    {name: "notes1.pdf", type: "pdf"},
    {name: "budget1.xlsx", type: "excel"},
    {name: "file2.docx", type: "docx"},
    {name: "invoice.pdf", type: "pdf"},
    {name: "sheet1.xlsx", type: "excel"},
    {name: "planA.docx", type: "docx"},
    {name: "slides.pdf", type: "pdf"},
    {name: "data2024.xlsx", type: "excel"},
    {name: "draft1.docx", type: "docx"},
    {name: "terms.pdf", type: "pdf"},
    {name: "sales.xlsx", type: "excel"},
    {name: "doc99.docx", type: "docx"},
    {name: "log2023.pdf", type: "pdf"},
    {name: "q1data.xlsx", type: "excel"},
    {name: "memo1.docx", type: "docx"},
    {name: "alert.pdf", type: "pdf"},
    {name: "book1.xlsx", type: "excel"},
    {name: "brief.docx", type: "docx"},
    {name: "scan.pdf", type: "pdf"}
];

export default function DocumentZone() {
    const [availableDocument, setAvailableDocument] = useState(documents)
    const [selectDocument, setSelectDocument] = useState([])

    function handleClick(document_name: string) {
        const fromAvailable = availableDocument.find(doc => doc.name === document_name);
        const fromSelected = selectDocument.find(doc => doc.name === document_name);

        if (fromAvailable) {
            // Move from available to selected
            setAvailableDocument(prev => prev.filter(doc => doc.name !== document_name));
            setSelectDocument(prev => [...prev, fromAvailable]);
        } else if (fromSelected) {
            // Move from selected to available
            setSelectDocument(prev => prev.filter(doc => doc.name !== document_name));
            setAvailableDocument(prev => [...prev, fromSelected]);
        }
    }

    return (
        <Stack w='30%'>
            <Stack>
                <Text fw={900}>Available Document:</Text>
                <ScrollArea h={300} className={classes.group}>
                    <Grid m={13}>
                        {availableDocument.map(document => (
                                <Grid.Col span={2}>
                                    <Document name={document.name} type={document.type} handleClick={handleClick}/>
                                </Grid.Col>
                            )
                        )}
                    </Grid>
                </ScrollArea>
            </Stack>
            <Space h={45}/>
            <Stack>
                <Text fw={900}>Select Document:</Text>
                <ScrollArea h={300} className={classes.group}>
                    <Grid m={13}>
                        {selectDocument.map(document => (
                                <Grid.Col span={2}>
                                    <Document name={document.name} type={document.type} handleClick={handleClick}/>
                                </Grid.Col>
                            )
                        )}
                    </Grid>
                </ScrollArea>
            </Stack>
        </Stack>
    )
}
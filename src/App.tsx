import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@xyflow/react/dist/style.css';
import {createTheme, Input, MantineProvider} from '@mantine/core';
import {Notifications} from "@mantine/notifications";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "./page/RootPage.tsx";
import classes from "./css/Label.module.css"
import AgentPage from "./page/AgentPage.tsx";
import EmbeddingPage from "./page/EmbeddingPage.tsx";
import MultiAgentPage from "./page/MultiAgentPage.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage/>,
        children: [
            {
                index: true,
                element: <AgentPage/>
            },
            {
                path: 'embedding',
                element: <EmbeddingPage/>
            },
            {
                path: 'multi-agent',
                element: <MultiAgentPage/>
            }
        ]
    }
])

const theme = createTheme({
    fontSmoothing: true,
    fontFamily: 'Nunito, sans-serif',
    primaryColor: 'blue',
    components: {
        Input: Input.extend({
            classNames: {
                input: classes.input,
            },
        }),
        InputWrapper: Input.Wrapper.extend({
            classNames: {
                label: classes.label,
            },
        })
    }
});

export default function App() {
    return <MantineProvider theme={theme}>
        <Notifications/>
        <RouterProvider router={router}/>
    </MantineProvider>
}
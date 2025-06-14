import AgentNode from "./AgentNode.tsx";
import AgentNode1 from "./AgentNode1.tsx";
import AgentNode2 from "./AgentNode2.tsx";
import AgentNode3 from "./AgentNode3.tsx";
import {Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState} from "@xyflow/react";
import React from "react";

const initialNodes = [
    {id: '1', type: 'customNode', position: {x: 0, y: 0}, data: {label: '1'}},
    {id: '2', type: 'customNode3', position: {x: 0, y: 300}, data: {label: '2'}},
    {id: '3', type: 'customNode1', position: {x: 300, y: 300}, data: {label: '2'}},
    {id: '4', type: 'customNode1', position: {x: -300, y: 300}, data: {label: '2'}},
    {id: '5', type: 'customNode2', position: {x: -600, y: 300}, data: {label: '2'}},
];


const initialEdges = [
    {id: 'e1-2', source: '1', target: '2'},
    {id: 'e1-3', source: '1', target: '3'},
    {
        id: 'e1-4', source: '1', target: '4', animated: true
    },
    {id: 'e1-5', source: '1', target: '5'},
    {id: 'e5-2', source: '5', target: '2', targetHandle: 'b', animated: true, type: 'smoothstep'}
];

const nodeTypes = {
    customNode: AgentNode,
    customNode1: AgentNode1,
    customNode2: AgentNode2,
    customNode3: AgentNode3
};

export default function AgentFlow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    return (
        <>
            <div style={{width: '60vw', height: '95vh'}}>
                <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodesChange={onNodesChange}
                           onEdgesChange={onEdgesChange} fitView>
                    <Background color="#ccc" variant={BackgroundVariant.Cross}/>
                    <Controls/>
                </ReactFlow>
            </div>
        </>
    )

}
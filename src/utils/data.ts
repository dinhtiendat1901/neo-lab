export interface Agent {
    id: number,
    name: string,
    role: string,
    description: string
}

export interface MultiAgent {
    id: number,
    name: string,
    leader: string,
    agentCount: number
}


export interface Embedding {
    id: number,
    name: string,
    type: string,
    chunkSize: number,
    chunkOverlap: number
}


export const listAgentData: Agent[] = [
    {
        id: 1,
        name: "Alex Carter",
        role: "Analyst",
        description: "Expert in data interpretation and statistical modeling."
    },
    {
        id: 2,
        name: "Riley Chen",
        role: "Field Agent",
        description: "Operates undercover for high-risk missions globally."
    },
    {
        id: 3,
        name: "Jordan Kim",
        role: "Cybersecurity Specialist",
        description: "Protects digital assets and investigates cyber threats."
    },
    {
        id: 4,
        name: "Taylor Morgan",
        role: "Intelligence Officer",
        description: "Manages and analyzes classified intelligence reports."
    },
    {
        id: 5,
        name: "Casey Nguyen",
        role: "Tactical Operative",
        description: "Leads special operations in high-stakes environments."
    },
    {
        id: 6,
        name: "Drew Patel",
        role: "Communications Expert",
        description: "Skilled in secure transmission and decoding signals."
    },
    {
        id: 7,
        name: "Morgan Rivera",
        role: "Surveillance Agent",
        description: "Monitors subjects using advanced tracking technology."
    },
    {
        id: 8,
        name: "Jamie Lee",
        role: "Negotiator",
        description: "Specialist in conflict resolution and hostage negotiation."
    },
    {
        id: 9,
        name: "Samira Hassan",
        role: "Linguist",
        description: "Fluent in 7 languages, assists with cross-border missions."
    },
    {
        id: 10,
        name: "Noah Brooks",
        role: "Tech Engineer",
        description: "Designs and maintains mission-critical tech systems."
    },
    {
        id: 11,
        name: "Avery Scott",
        role: "Logistics Coordinator",
        description: "Ensures efficient planning and supply chain management."
    },
    {
        id: 12,
        name: "Quinn Bailey",
        role: "Psychological Profiler",
        description: "Assesses behavioral patterns of persons of interest."
    },
    {
        id: 13,
        name: "Harper Zhao",
        role: "Drone Operator",
        description: "Conducts aerial reconnaissance and support operations."
    }
];


export const listEmbeddingData: Embedding[] = [
    {id: 1, name: "report1.docx", type: "docx", chunkSize: 500, chunkOverlap: 50},
    {id: 2, name: "report2.pdf", type: "pdf", chunkSize: 450, chunkOverlap: 40},
    {id: 3, name: "report3.excel", type: "excel", chunkSize: 600, chunkOverlap: 60},
    {id: 4, name: "report4.docx", type: "docx", chunkSize: 550, chunkOverlap: 55},
    {id: 5, name: "report5.pdf", type: "pdf", chunkSize: 480, chunkOverlap: 48},
    {id: 6, name: "report6.excel", type: "excel", chunkSize: 620, chunkOverlap: 62},
    {id: 7, name: "report7.docx", type: "docx", chunkSize: 530, chunkOverlap: 53},
    {id: 8, name: "report8.pdf", type: "pdf", chunkSize: 470, chunkOverlap: 47},
    {id: 9, name: "report9.excel", type: "excel", chunkSize: 610, chunkOverlap: 61},
    {id: 10, name: "report10.docx", type: "docx", chunkSize: 520, chunkOverlap: 52},
    {id: 11, name: "report11.pdf", type: "pdf", chunkSize: 460, chunkOverlap: 46},
    {id: 12, name: "report12.excel", type: "excel", chunkSize: 630, chunkOverlap: 63},
    {id: 13, name: "report13.docx", type: "docx", chunkSize: 540, chunkOverlap: 54}
]


export const listMultiAgentData: MultiAgent[] = [
    {id: 1, name: 'Alpha Team', leader: 'Alice Johnson', agentCount: 5},
    {id: 2, name: 'Beta Squad', leader: 'Bob Smith', agentCount: 8},
    {id: 3, name: 'Gamma Group', leader: 'Carol Davis', agentCount: 12},
    {id: 4, name: 'Delta Force', leader: 'David Wilson', agentCount: 7},
    {id: 5, name: 'Epsilon Unit', leader: 'Eve Martinez', agentCount: 10},
    {id: 6, name: 'Zeta Division', leader: 'Frank Brown', agentCount: 6},
    {id: 7, name: 'Eta Crew', leader: 'Grace Lee', agentCount: 9},
    {id: 8, name: 'Theta Patrol', leader: 'Hank Clark', agentCount: 11},
    {id: 9, name: 'Iota Team', leader: 'Irene Lewis', agentCount: 4},
    {id: 10, name: 'Kappa Unit', leader: 'John Walker', agentCount: 13},
    {id: 11, name: 'Lambda Squad', leader: 'Karen Hall', agentCount: 3},
    {id: 12, name: 'Mu Group', leader: 'Luke Young', agentCount: 15},
    {id: 13, name: 'Nu Force', leader: 'Mona King', agentCount: 14}
];

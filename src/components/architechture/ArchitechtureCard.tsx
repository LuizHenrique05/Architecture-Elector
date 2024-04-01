interface ResultsData {
    name: string;
    link: string;
    description: string;
    pros: string[]; 
    cons: string[]; 
    cases: string[];
    conclusion: string;
    history: string;
    answers: {
        complexity: string;
        deadline: string;
        scalability: string;
        resilience_or_total_uptime: string;
        devops: string;
        tecnicalUsers: string;
    }
}

interface ProjectData {
    complexity: string;
    deadline: string;
    devops: string;
    resilience: boolean;
    scalability: string;
    tecnicalUsers: string;
    total_uptime: boolean;
}

interface ArchitechtureCardProps {
    architechturesResult: ResultsData[];
    localforage: ProjectData;
}

const ArchitechtureCard: React.FC<ArchitechtureCardProps> = ({ architechturesResult, localforage }) => {
    return (
        <div>aaaaa</div>
    )
}

export default ArchitechtureCard
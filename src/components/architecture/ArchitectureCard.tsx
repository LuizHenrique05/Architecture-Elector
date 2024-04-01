import Link from 'next/link';
import styles from './ArchitectureCard.module.css'

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

interface ArchitectureCardProps {
    architecturesResult: ResultsData[];
    localforage: ProjectData;
}

const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ architecturesResult, localforage }) => {
    return (
        <section className={styles.result}>
            <h3>Top Architectures for your project</h3>
            <ul className={styles.top__list}>
                {architecturesResult.length > 0 ? 
                    architecturesResult.map((architectureResult, index: number) => {
                        return (
                            <li key={index}>
                                <Link target='_blank' href={architectureResult.link}>
                                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : ''}
                                    {index + 1}. {architectureResult.name}. (Read all about this architecture)
                                </Link>
                            </li>
                        )
                }) : <p>Architectures not found for these specifications...</p>}
            </ul>

            <div>
                <h3>About</h3>
                <p>In today's fast-paced digital landscape, choosing the right architecture is crucial for the success of any project. 
                    By carefully considering factors such as project deadlines, scalability needs, team expertise, and system requirements, 
                    you can ensure the efficient development and deployment of your solution. With the right architecture in place, you can streamline processes, 
                    optimize performance, and meet the evolving needs of your users and stakeholders. </ p>
                <p> These architectures are selected based on your project's {localforage.deadline}-weeks deadline.
                    Given that uptime {localforage.total_uptime ? "is" : "isn't " } a top priority and
                    resilience {localforage.resilience ? "is" : "isn't"} critical, and
                    considering the project's relatively have a note "{localforage.complexity}" on complexity,
                    a team with "{localforage.devops}" familiarity with DevOps,
                    and the system's {localforage.tecnicalUsers == 'yes' ? '' : 'non-' }tecnical nature and
                    you-re right now considering {localforage.scalability} scalability options.</p>
            </div>

            <div>
                <h3>Summary</h3>
                <ul className={styles.summary__list}>
                    <li><span>Complexity grade:</span> {localforage.complexity}</li>
                    <li><span>Deadline:</span> {localforage.deadline} Weeks</li>
                    <li><span>Familiarity with devops:</span> {localforage.devops}</li>
                    <li style={{ color: localforage.resilience ? 'green' : 'red' }}><span>Resilience is a priority:</span> {localforage.resilience ? 'Yes' : 'No'}</li>
                    <li style={{ color: localforage.total_uptime ? 'green' : 'red' }}><span>Total uptime is a priority:</span> {localforage.total_uptime ? 'Yes' : 'No'}</li>
                    <li><span>Project Scalability Perspective:</span> {localforage.scalability}</li>
                    <li style={{ color: localforage.tecnicalUsers == 'yes' ? 'green' : localforage.tecnicalUsers == 'no' ? 'red' : '' }}><span>It's made for tecnical users:</span> {localforage.tecnicalUsers}</li>
                </ul>
            </div>

            <Link href='/'>&larr; Back to elector form</Link>
        </ section>
    )
}

export default ArchitectureCard
import localforage from "localforage"
import { fetchArchitechtureResult } from '@/lib/actions/architechture.action'
import ArchitechtureCard from '@/components/architechture/ArchitechtureCard'

interface projectData {
    complexity: string,
    deadline: string,
    devops: string,
    resilience: boolean,
    scalability: string,
    tecnicalUsers: string,
    total_uptime: boolean
}

export default async function Result() {
    const localforage_data = await localforage.getItem('current_project_informations')
    const result = await fetchArchitechtureResult(localforage_data as projectData)

    return (
        <>
            {result ? 
                <ArchitechtureCard 
                    architechturesResult={result}
                    localforage={localforage_data as projectData}
                /> :
                <p>Nenhum resultado encontrato</p>
            }
        </>
    )
}
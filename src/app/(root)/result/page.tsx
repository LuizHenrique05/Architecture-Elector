'use client'

import localforage from "localforage"
import { fetchArchitectureResult } from '@/lib/actions/architecture.action'
import ArchitectureCard from '@/components/architecture/ArchitectureCard'
import { useEffect, useState } from "react"

interface projectData {
    complexity: string,
    deadline: string,
    devops: string,
    resilience: boolean,
    scalability: string,
    tecnicalUsers: string,
    total_uptime: boolean
}

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

export default function Result() {
    const [localforageData, setLocalforageData] = useState<projectData>({
        complexity: '',
        deadline: '',
        devops: '',
        resilience: false,
        scalability: '',
        tecnicalUsers: '',
        total_uptime: false
    })
    const [result, setResult] = useState<ResultsData[]>();

    useEffect(() => {
        localforage.getItem<projectData>('current_project_informations')
          .then((data: projectData | null) => {
            if (data) {
              setLocalforageData(data);
              fetchArchitectureResult(data).then(result => setResult(result));
            }
          });
      }, []);

    return (
        <>
            {result ?
                <ArchitectureCard 
                    architecturesResult={result}
                    localforage={localforageData as projectData} />
            : <p style={{textAlign: 'center'}}>Submit the form to elect top architectures to use on your project.</p>}
        </>
    )
}
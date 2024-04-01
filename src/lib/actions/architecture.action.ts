'use server'

import { architectures } from '@/constants'

export async function fetchArchitecture(architectureName: string) {
    if (!architectureName) return []

    return architectures.find(architecture => architecture.name.trim().toLowerCase() === architectureName.trim().toLowerCase())
}

export async function fetchArchitectures() {
    return architectures
}

interface projectData {
    complexity: string,
    deadline: string,
    scalability: string,
    devops: string,
    resilience: boolean,
    tecnicalUsers: string,
    total_uptime: boolean
}

function orderDevops(devops: string) {
    const devops_array = ['unfamiliar', 'somewhat', 'familiar']

    if (devops_array.indexOf(devops) !== -1) return devops_array.slice(0, devops_array.indexOf(devops) + 1)
    else return [devops]
}

function orderScalability(scalability: string) {
    const scalability_array = ['low', 'medium']

    if (scalability_array.indexOf(scalability) !== -1) return scalability_array.slice(0, scalability_array.indexOf(scalability) + 1)
    else return [scalability]
}

function orderResilienceTotaluptime(resilience: boolean, total_uptime: boolean) {
    if (resilience) return total_uptime ? 'both' : 'resilience'
    else return total_uptime ? 'total_uptime' : 'none'
}

export async function fetchArchitectureResult({ complexity, deadline, devops, resilience, scalability, tecnicalUsers, total_uptime }: projectData) {
    const devops_ordered = orderDevops(devops)
    const scalability_ordered = orderScalability(scalability)
    const resilience_or_total_uptime = orderResilienceTotaluptime(resilience, total_uptime)

    const filteredData = architectures.filter(architecture => {
        return (
            parseFloat(complexity) <= parseFloat(architecture.answers.complexity) &&
            parseFloat(deadline) <= parseFloat(architecture.answers.deadline) &&
            scalability_ordered.includes(architecture.answers.scalability) &&
            resilience_or_total_uptime === architecture.answers.resilience_or_total_uptime &&
            devops_ordered.includes(architecture.answers.devops) &&
            tecnicalUsers === architecture.answers.tecnicalUsers
        )
    })

    return filteredData
}
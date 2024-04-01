'use server'

import { architechtures } from '@/constants'

export async function fetchArchitechture(architechtureName: string) {
    if (!architechtureName) return []

    return architechtures.find(architechture => architechture.name.trim().toLowerCase() === architechtureName.trim().toLowerCase())
}

export async function fetchArchitechtures() {
    return architechtures
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
    const scalability_array = ['low', 'medium', 'high']

    if (scalability_array.indexOf(scalability) !== -1) return scalability_array.slice(0, scalability_array.indexOf(scalability) + 1)
    else return [scalability]
}

function orderResilienceTotaluptime(resilience: boolean, total_uptime: boolean) {
    if (resilience) return total_uptime ? 'both' : 'resilience'
    else return total_uptime ? 'total_uptime' : 'none'
}

export async function fetchArchitechtureResult({ complexity, deadline, devops, resilience, scalability, tecnicalUsers, total_uptime }: projectData) {
    const devops_ordered = orderDevops(devops)
    const scalability_ordered = orderScalability(scalability)
    const resilience_or_total_uptime = orderResilienceTotaluptime(resilience, total_uptime)

    const filteredData = architechtures.filter(architechture => {
        return (
            parseFloat(complexity) <= parseFloat(architechture.answers.complexity) &&
            parseFloat(deadline) <= parseFloat(architechture.answers.deadline)  &&
            scalability_ordered.includes(architechture.answers.scalability) &&
            resilience_or_total_uptime === architechture.answers.resilience_or_total_uptime &&
            devops_ordered.includes(architechture.answers.devops) &&
            tecnicalUsers === architechture.answers.tecnicalUsers
        )
    })

    return filteredData
}
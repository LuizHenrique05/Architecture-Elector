'use server'

import { architechtures } from '@/constants'

export async function fetchArchitechture(architechtureName: string) {
    if (!architechtureName) return []

    return architechtures.filter(architechture => architechture.name.trim().toLowerCase() === architechtureName.trim().toLowerCase())
}

export async function fetchArchitechtures() {
    return architechtures
}
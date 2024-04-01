'use client'

import localforage from "localforage"
import { useEffect, useState } from "react"

import styles from './FloatingResults.module.css'
import Link from "next/link"

export default function FloatingResults() {
    const [showFloatingResults, setShowFloatingResults] = useState<boolean>(false)
    
    useEffect(() => {
        localforage.getItem('current_project_informations').then(data => {
            if (data !== null) setShowFloatingResults(true)
            if (data === null) setShowFloatingResults(false)
        })
    }, [])

    return (
        showFloatingResults && (
            <aside className={styles.show__results}>
                <Link href='/result'>Check your last result &rarr;</Link>
            </aside>
        )
    )
}
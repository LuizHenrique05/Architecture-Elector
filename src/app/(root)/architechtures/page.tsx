'use server'

import Link from 'next/link'

import styles from './page.module.css'
import { fetchArchitechtures } from '@/lib/actions/architechture.action'

export default async function Architechtures() {
    const architechtures = await fetchArchitechtures()

    return (
        <section className={styles.list__architechtures}>
            <h2>List of architechtures on our database</h2>
            <ul className={styles.list}>
                {architechtures.map((architechture: any, index) => {
                    return (
                        <li key={index}>
                            <Link href={architechture.link}>
                                {architechture.name} &rarr;
                            </Link>      
                        </li>
                    )
                })}
            </ul>
            <Link href='/'>&larr; Back to elector form</Link>
        </section>
    )
}
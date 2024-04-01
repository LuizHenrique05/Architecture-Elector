'use server'

import Link from 'next/link'

import styles from './page.module.css'
import { fetchArchitectures } from '@/lib/actions/architecture.action'

export default async function Architectures() {
    const architectures = await fetchArchitectures()

    return (
        <section className={styles.list__architectures}>
            <h2>List of architectures on our database</h2>
            <ul className={styles.list}>
                {architectures.map((architecture: any, index) => {
                    return (
                        <li key={index}>
                            <Link href={architecture.link}>
                                {architecture.name} &rarr;
                            </Link>      
                        </li>
                    )
                })}
            </ul>
            <Link href='/'>&larr; Back to elector form</Link>
        </section>
    )
}
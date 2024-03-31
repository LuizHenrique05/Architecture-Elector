import Link from 'next/link'

import styles from './page.module.css'
import { architechtures } from '@/constants'

export default function Architechtures() {
  return (
    <>
        <h2>List of architechtures on our database</h2>
        <ul className={styles.list}>
            {architechtures.map((architechture: any, index) => {
                return (
                    <li key={index}>
                        <Link href={architechture.link}>
                            {architechture.name}
                        </Link>      
                    </li>
                )
            })}
        </ul>
    </>
  )
}
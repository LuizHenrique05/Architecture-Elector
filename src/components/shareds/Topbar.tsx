import Link from 'next/link'

import styles from './Topbar.module.css'

function Topbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h1>Architechtures Elector</h1>
      </Link>
      <Link href="/architechtures">
        <h2>List of Architechtures</h2>
      </Link>
    </nav>
  )
}

export default Topbar
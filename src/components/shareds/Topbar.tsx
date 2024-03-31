import Image from 'next/image'
import Link from 'next/link'

import styles from './Topbar.module.css'

function Topbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h1>Architecture Elector</h1>
      </Link>
    </nav>
  )
}

export default Topbar
import Link from 'next/link'

import styles from './Topbar.module.css'

function Topbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h1>Architectures Elector</h1>
      </Link>
      <Link href="/architectures">
        <h2>List of Architectures</h2>
      </Link>
    </nav>
  )
}

export default Topbar
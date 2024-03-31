import Link from 'next/link'

import styles from './Bottombar.module.css'

function Bottombar() {
  return (
    <footer className={styles.footer}>
        <h4>&copy; all rights reserved, 2024. Made by: <Link href="https://www.instagram.com/dev.simba/">@dev.simba</Link></h4>
    </footer>
  )
}

export default Bottombar
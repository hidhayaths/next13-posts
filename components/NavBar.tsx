import Link from "next/link"
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.logo}>E2E Dashboard</div>
            <ul className={styles.nav_links}>
                <li className={styles.nav_link}><Link href="/">Home</Link> </li>
                <li className={styles.nav_link}><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar
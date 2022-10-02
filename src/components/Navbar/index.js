import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'


function Navbar() {
    return (
        // Navbar start
        <nav className={styles.nav}>
            <div className={styles.left} >
                <div className={styles.navtitle}>
                    <Link className={styles.navtitle} to="/">Star Wars</Link>
                </div>
                <ul className={styles.menu}>
                    <li><Link to="/starships">Starships</Link></li>
                </ul>
            </div>
        </nav>
        // Navbar end
    )
}
export default React.memo(Navbar); //prevent re-rendering
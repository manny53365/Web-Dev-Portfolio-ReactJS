import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div>
        <div className={styles.navbar}>
            <Link className={styles.links} to='/'>Home</Link>
            <Link className={styles.links} to='/about'>About</Link>
            <Link className={styles.links} to='/experience'>Work Experience</Link>
            <Link className={styles.links} to='/projects'>Projects</Link>
        </div>
    </div>
  )
};

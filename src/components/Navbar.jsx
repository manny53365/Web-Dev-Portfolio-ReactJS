import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
        <div className={styles.navbar}>
            <Link className={isActive('/') ? `${styles.active} ${styles.links}` : styles.links} to='/'>Home</Link>
            <Link className={isActive('/about') ? `${styles.active} ${styles.links}` : styles.links} to='/about'>About</Link>
            <Link className={isActive('/experience') ?  `${styles.active} ${styles.links}` : styles.links} to='/experience'>Work Experience</Link>
            <Link className={isActive('/projects') ? `${styles.active} ${styles.links}` : styles.links} to='/projects'>Projects</Link>
        </div>
    </div>
  )
};

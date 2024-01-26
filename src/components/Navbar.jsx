import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

import styles from './Navbar.module.css';

export default function Navbar() {

  const location = useLocation();
  const { user } = useAuthContext();
  const { logout, isPending, error } = useLogout();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
    navigate('/');
  }

  return (
    <div>
        <div className={styles.navbar}>
            <Link className={isActive('/') ? `${styles.active} ${styles.links}` : styles.links} to='/'>Home</Link>
            <Link className={isActive('/about') ? `${styles.active} ${styles.links}` : styles.links} to='/about'>About</Link>
            <Link className={isActive('/experience') ?  `${styles.active} ${styles.links}` : styles.links} to='/experience'>Work Experience</Link>
            <Link className={isActive('/projects') ? `${styles.active} ${styles.links}` : styles.links} to='/projects'>Projects</Link>
            {user && <Link className={isActive('/addskill') ? `${styles.active} ${styles.links}` : styles.links} to='/addskill'>Add Skill</Link>}
            {user && <Link className={isActive('/addproject') ? `${styles.active} ${styles.links}` : styles.links} to='/addproject'>Add Project</Link>}
            {user && <Link className={isActive('/addexperience') ? `${styles.active} ${styles.links}` : styles.links} to='/addexperience'>Add Experience</Link>}
            {user && isPending && <Button variant="outlined" type='submit' onClick={handleLogout} disabled>Logging out...</Button>}
            {user && !isPending && <Button variant="outlined" type='submit' onClick={handleLogout}>Log out</Button>}
            {error && <p>{error}</p>}
        </div>
    </div>
  )
};

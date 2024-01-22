import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFonticonsFi, faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles['links-container']}>
            <Link className={styles.links} 
            to="https://www.fiverr.com/mannyrodriguez0" 
            target='_blank' 
            rel='noopener noreferrer'><FontAwesomeIcon icon={faFonticonsFi} />
            </Link>
            <Link className={styles.links} 
            to="https://www.linkedin.com/in/manuel-rodriguez-804b9597" 
            target='_blank' 
            rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link className={styles.links} 
            to="https://github.com/manny53365" 
            target='_blank' 
            rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link className={styles.links} 
            to="https://www.hackerrank.com/profile/mannyrodriguez01" 
            target='_blank' 
            rel='noopener noreferrer'><FontAwesomeIcon icon={faHackerrank} />
            </Link>
        </div>
        <p className={styles.copyright}>© Manny53365 {new Date().getFullYear()}</p>
    </div>
  )
};

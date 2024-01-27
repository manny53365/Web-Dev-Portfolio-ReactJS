// import { Link } from 'react-router-dom';
import SkillList from '../../components/SkillList';
import { useCollection } from '../../hooks/useCollection';
import styles from './Skills.module.css';

export default function Skills() {

  const { documents, error } = useCollection('skills');

  return (
    <div className={styles['about-container']}>
      {!documents && <p className={styles.loading}>Loading skills...</p> }
      <div className={styles['skills-container']}>
        {documents && <h1>My Skills</h1>}
        {documents && <SkillList skills={documents}/>}
        {/* {documents && (
          <>
            <Link to='/projects'>Check out my projects</Link>
            <Link to='/experience'>View my work history</Link>
          </>
        )} */}
        {error && <p>{error}</p>}
      </div>
    </div>
  )
};

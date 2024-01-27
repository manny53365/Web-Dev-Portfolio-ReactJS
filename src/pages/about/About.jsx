import SkillList from '../../components/SkillList';
import { useCollection } from '../../hooks/useCollection';
import styles from './About.module.css';

export default function About() {

  const { documents, error } = useCollection('skills');

  return (
    <div className={styles['about-container']}>
      {!documents && <p className={styles.loading}>Loading skills...</p> }
      <div className={styles['skills-container']}>
        {documents && <h1>My Skills</h1>}
        {documents && <SkillList skills={documents}/>}
        {error && <p>{error}</p>}
      </div>
    </div>
  )
};

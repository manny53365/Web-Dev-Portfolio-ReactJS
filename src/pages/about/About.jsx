import SkillList from '../../components/SkillList';
import { useCollection } from '../../hooks/useCollection';
import styles from './About.module.css';

export default function About() {

  const { documents, error } = useCollection('skills');

  return (
    <div className={styles['about-container']}>
      <h2>About me</h2>
      {documents && <SkillList skills={documents}/>}
      {error && <p>{error}</p>}
      <h3>Test</h3>
    </div>
  )
};

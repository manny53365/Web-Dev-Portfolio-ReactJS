import SkillList from '../../components/SkillList';
import { useCollection } from '../../hooks/useCollection';
import styles from './About.module.css';

// const skills = [
//   {
//     name: 'Test'
//   },
//   {
//     name: 'Test 1'
//   },
//   {
//     name: 'Test 2'
//   }
// ];

export default function About() {

  const { documents, error } = useCollection('skills')

  return (
    <div className={styles['about-container']}>
      <h2>About me</h2>
      {documents && <SkillList skills={documents}/>}
      {error && <p>{error}</p>}
    </div>
  )
};

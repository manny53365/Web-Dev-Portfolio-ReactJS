import SkillList from '../../components/SkillList';
import styles from './About.module.css';

const skills = [
  {
    name: 'Test'
  },
  {
    name: 'Test 1'
  },
  {
    name: 'Test 2'
  }
];

export default function About() {
  return (
    <div className={styles['about-container']}>
      <h2>About me</h2>
      <SkillList skills={skills}/>
    </div>
  )
};

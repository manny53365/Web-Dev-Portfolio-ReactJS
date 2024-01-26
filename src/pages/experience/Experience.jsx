import { useCollection } from '../../hooks/useCollection';
import ExperienceCard from '../../components/ExperienceCard';
import styles from './Experience.module.css';

export default function Experience() {

  const { documents, error } = useCollection('experience', ['createdAt', 'desc']);

  return (
    <div className={styles['experience-container']}>
      {!documents && <p className={styles.loading}>Loading work experience...</p>}
      {documents && documents.map(job => (
        <ExperienceCard key={job.id} props={job} /> 
      ))}
      {error && <p>{error}</p>}
    </div>
  )
};

import { useCollection } from '../../hooks/useCollection';
import ExperienceCard from '../../components/ExperienceCard';
import { CircularProgress } from '@mui/material';
import styles from './Experience.module.css';

export default function Experience() {

  const { documents, error } = useCollection('experience', ['createdAt', 'desc']);

  return (
    <div className={styles['experience-container']}>
      {!documents && <div className={styles['loading-container']}>
        <CircularProgress className={styles['loading-spinner']}/>
        <p className={styles.loading}>Loading work experience...</p>
      </div>}
      {documents && documents.map(job => (
        <ExperienceCard key={job.id} props={job} /> 
      ))}
      {error && <p>{error}</p>}
    </div>
  )
};

import ProjectCard from '../../components/ProjectCard';
import { useCollection } from '../../hooks/useCollection';
import { CircularProgress } from '@mui/material';
import styles from './Projects.module.css';

export default function Projects() {

  const { documents, error } = useCollection('projects', ['createdAt', 'desc']);

  return (
    <div className={styles['projects-container']}>
      {!documents && <div className={styles['loading-container']}>
        <CircularProgress className={styles['loading-spinner']}/>
        <p className={styles.loading}>Loading projects...</p>
      </div>}
      {documents && documents.map(project => (
        <ProjectCard key={project.id} props={project}/>
      ))}
      {error && <p>{error}</p>}
    </div>
  )
};

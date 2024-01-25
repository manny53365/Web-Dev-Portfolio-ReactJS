import ProjectCard from '../../components/ProjectCard';
import { useCollection } from '../../hooks/useCollection';
import styles from './Projects.module.css';

export default function Projects() {

  const { documents, error } = useCollection('projects', ['createdAt', 'desc']);

  return (
    <div className={styles['projects-container']}>
        {!documents && <p>Loading projects...</p>}
        {documents && documents.map(project => (
          <ProjectCard key={project.id} props={project}/>
        ))}
        {error && <p>{error}</p>}
    </div>
  )
};

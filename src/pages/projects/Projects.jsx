import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';
import { useCollection } from '../../hooks/useCollection';

export default function Projects() {

  const { documents, error } = useCollection('projects');

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

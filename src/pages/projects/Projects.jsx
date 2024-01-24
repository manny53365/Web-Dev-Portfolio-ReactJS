import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';
import { useCollection } from '../../hooks/useCollection';

export default function Projects() {

  const { documents } = useCollection('projects');

  return (
    <div className={styles['projects-container']}>
        {documents && documents.map(project => (
          <ProjectCard key={project.id} props={project}/>
        ))}
    </div>
  )
};

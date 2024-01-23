import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';


const projects = [
  {
    name: 'Test 1',
    description: 'Test description',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 2',
    description: 'Test description',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 3',
    description: 'Test description',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 4',
    description: 'Test description',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 5',
    description: 'Test description',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  }
]

export default function Projects() {
  return (
    <div className={styles['projects-container']}>
        {/* {projects.map(project => (
          <div className={styles.project}>
            <div className={styles['project-img']}>
              <img src={project.img} alt='Project Thumbnail' />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={project.link}>Link to {project.name} site</Link>
          </div>
        ))} */}
        {projects.map(project => (
          <ProjectCard props={project}/>
        ))}
    </div>
  )
};

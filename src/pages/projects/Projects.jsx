import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    name: 'Test 1',
    description: 'I created this project using JavaScript mainly, I use MongoDB to persist the data; in addition I also used expressjs to allow for route parameters. This allows you to create custom lists.',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 2',
    description: 'This project was a sample blog website using MongoDB, expressjs, and the lodash library. The lodash library allowed me to create custom pages for each post id generated in the mongo database',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 3',
    description: 'This is a pure JavaScript project, I leveraged the genez.io plaform to host my app and respond to webhooks coming from Slack. The purpose of the bot is to allow a user to automatically monitor the status of their crypto node(s), more details in the read me file in the repo. ',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 4',
    description: 'This project was created using HTML, CSS, and JavaScript. I used JavaScript to create the card tiles for each book entry. Each book consists of an author, page count, title and if the user has read it or not. Currently, there is no data persistence, this may be added in the future.',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 5',
    description: 'This is a ReactJS project with user authentication and database persistence(firebase). Users will be able to login in an add/delete transactions but will not be able to view/delete other user\'s transactions.',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  },
  {
    name: 'Test 6',
    description: 'This is a ReactJS project with user authentication and database persistence(firebase). This site allows users to create projects, set due dates, add comments, etc.',
    link: 'http://localhost:3000',
    img: 'favicon.ico'
  }
]

export default function Projects() {
  return (
    <div className={styles['projects-container']}>
        {projects.map(project => (
          <ProjectCard props={project}/>
        ))}
    </div>
  )
};

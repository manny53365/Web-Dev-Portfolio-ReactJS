import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.cursive}>I'm Manny</h1>
            <h2 className={styles['intro-role']}>A full stack developer from Florida</h2>
        </div>
        <div className={styles.intro}>
            <h2>Intro</h2>
            <p className={styles['intro-text']}>
                Experienced Software Engineer with a proven track record in developing, maintaining, and enhancing robust applications.
                Highly skilled in addressing and resolving client-reported issues efficiently.
                Demonstrated expertise in implementing innovative features and optimizing existing systems using technologies like Python, MongoDB, and React.
                Known for effective collaboration with cross-functional teams and clients, ensuring applications are in sync with evolving business requirements.
                Committed to continuous learning and applying the latest technologies to solve real-world challenges.
                Brings a passion for tech-driven solutions and a dedication to delivering exceptional results.
            </p>
        </div>
    </div>
  )
};

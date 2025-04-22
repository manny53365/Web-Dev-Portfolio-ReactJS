import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
            <h1 className={styles.cursive}>I'm Manny</h1>
            <h2 className={styles['intro-role']}>A full stack developer from Florida</h2>
        </div>
        <div className={styles.intro}>
          <img className={styles['profile-image']} src='https://firebasestorage.googleapis.com/v0/b/web-dev-portfolio-6b1e9.appspot.com/o/photos%2FManuelR-SpringHeadshot.jpg?alt=media&token=39b99e6a-25da-4850-857d-ba008565178e' alt="author" />
            <h2>Intro</h2>
            {/* <p className={styles['intro-text']}>
            Experienced Software Engineer with a proven track record in developing, maintaining, and enhancing robust applications.
            Highly skilled in addressing and resolving client-reported issues efficiently.
            Demonstrated expertise in implementing innovative features and optimizing existing systems using technologies like Python, MongoDB, and React.
            As a seasoned leader, I have effectively led teams and mentored junior engineers, fostering a collaborative environment and enhancing team performance.
            Known for effective collaboration with cross-functional teams and clients, ensuring applications are in sync with evolving business requirements.
            Committed to continuous learning and applying the latest technologies to solve real-world challenges.
            Brings a passion for tech-driven solutions, a dedication to delivering exceptional results, and a strong leadership acumen that drives team success.
            </p> */}
            <ul>
              <li className={styles["intro-text"]}>
              Experienced Software Engineer with a proven track record in developing, maintaining, and enhancing robust applications.
              </li>
              <li className={styles["intro-text"]}>
              Highly skilled in addressing and resolving client-reported issues efficiently.
              </li>
              <li className={styles["intro-text"]}>
              Demonstrated expertise in implementing innovative features and optimizing existing systems using technologies like Python, MongoDB, and React.
              </li>
              <li className={styles["intro-text"]}>
              As a seasoned leader, I have effectively led teams and mentored junior engineers, fostering a collaborative environment and enhancing team performance.
              </li>
              <li className={styles["intro-text"]}>
              Known for effective collaboration with cross-functional teams and clients, ensuring applications are in sync with evolving business requirements.
              </li>
              <li className={styles["intro-text"]}>
              Committed to continuous learning and applying the latest technologies to solve real-world challenges.
              </li>
              <li className={styles["intro-text"]}>
              Brings a passion for tech-driven solutions, a dedication to delivering exceptional results, and a strong leadership acumen that drives team success.
              </li>
            </ul>
        </div>
    </div>
  )
};

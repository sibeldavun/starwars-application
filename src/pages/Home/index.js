import React from 'react';
import styles from './styles.module.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = "STAR WARS";
  }, []);

  return (
    // Home start
    <div className={styles.container}>
      <div className={styles.card}>
        <input type="image" src={`../home.jpeg`} alt="Ship Image" loading="lazy" style={{ width: "100%", height: "300px" }} />
      </div>
      <div className={styles.titleCard}>
        <h1 className={styles.title}>MAY THE</h1>
        <h1 className={styles.title}>FORCE BE </h1>
        <h1 className={styles.title}>WITH YOU</h1>
      </div>
    </div>
    // Home end
  )
}
export default Home;
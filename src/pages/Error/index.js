import React from 'react';
import { useEffect } from 'react';
import styles from './styles.module.css';


function Error() {
  useEffect(() => {
    document.title = "STAR WARS-Welcome to the dark side";
  }, []);

  return (
    // Error start
    <div className={styles.error}> </div>
    // Error end
  )
}
export default Error;
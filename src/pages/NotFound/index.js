import React from 'react'
import styles from './styles.module.css'
import { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = "STAR WARS-Welcome to the dark side";
  }, []);

  return (
    // NotFound start
    <div className={styles.notFound}> </div>
    // NotFound end
  )
}
export default NotFound;
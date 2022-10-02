import React from 'react';
import styles from './styles.module.css'

function Loading() {
    return (
        <div className={styles.container}>
           <h1 className={styles.text}>Loading...</h1> 
        </div>
    )
}
export default Loading;
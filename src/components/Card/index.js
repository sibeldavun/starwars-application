import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function Card({ item }) {
    const urlParams = item.url.split("/")
    const id = urlParams[5]


    return (
        // Card start
        <div className={styles.card}>
            <Link className={styles.underline} to={`/starship/${id}`} >
                <input type="image" className={styles.img} src={`./assets/${id}.jpeg`} loading="lazy" alt="Ship Image" style={{ width: "100%", height: "180px" }} />
                <div className={styles.cardInfo}>
                    
                    <h1 className={styles.title}>{item.name}</h1>
                    
                    <p className={styles.property}><span className={styles.propertyName}>Model: </span>{item.model}</p>
        <p className={styles.property}><span className={styles.propertyName}>Hyperdrive rating: </span>{item.hyperdrive_rating}</p>
                </div>
            </Link>
        </div>
        // Card end
    )
}
export default Card;
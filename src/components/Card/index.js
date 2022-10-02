import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function Card({ item }) {
    const urlParams = item.url.split("/")
    const id = urlParams[5]


    return (
        // Card start
        <div className={styles.card}>
            <Link to={`/starship/${id}`} >
                <img className={styles.img} src={`./assets/${id}.jpeg`} loading="lazy" alt="Ship Image" style={{ width: "100%", height: "180px" }} />
                <div className={styles.cardInfo}>
                    <div className={styles.name}>
                        <h4>{item.name}</h4>
                    </div>
                    <div className={styles.text}>
                        <p>{item.model}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{item.hyperdrive_rating}</p>
                    </div>
                </div>
            </Link>
        </div>
        // Card end
    )
}
export default Card;
import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { fetchStarshipDetails } from '../../swapi';
import { useQuery } from 'react-query';
import Error from '../Error';
import Loading from '../Loading';


function StarshipDetails() {
  useEffect(() => {
    document.title = "STAR WARS-Starship Details";
  }, []);

  const { id } = useParams();
  const { isLoading, error, data } = useQuery(['starships', id], () => fetchStarshipDetails(id)
  )
  if (isLoading) return <Loading />

  if (error) return <Error />

  return (

    // Define starship details
    <div className={styles.starshipdetails}>
      <div className={styles.card}>
        <h1 className={styles.title}>{data.name}</h1>
        <img src={`../assets/${id}.jpeg`} alt="Ship Image" loading="lazy" style={{ width: "100%", height: "300px" }} />
        <p className={styles.property}><span className={styles.propertyName}>Model: </span>{data.model}</p>
        <p className={styles.property}><span className={styles.propertyName}>Hyperdrive rating: </span>{data.hyperdrive_rating}</p>
        <p className={styles.property}><span className={styles.propertyName}>Passengers: </span>{data.passengers}</p>
        <p className={styles.property}><span className={styles.propertyName}>Max atmosphering speed: </span>{data.max_atmosphering_speed}</p>
        <p className={styles.property}><span className={styles.propertyName}>Manufacturer: </span>{data.manufacturer}</p>
        <p className={styles.property}><span className={styles.propertyName}>Crew: </span>{data.crew}</p>
        <p className={styles.property}><span className={styles.propertyName}>Capacity: </span>{data.cargo_capacity}</p>
      </div>
    </div>
  )
}
export default StarshipDetails;
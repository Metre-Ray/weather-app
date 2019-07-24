import React from "react";
import styles from './Weather.module.scss';

const Weather = (props) => {
  const { temperature, humidity, pressure, city, country,
    description, longitude, latitude, windSpeed, base, error } = props;
  return (
    <div className={styles.weather}>
      { city && (
        <React.Fragment>
          <p><span className={styles.label}>Location:</span> {city}, {country}</p>
          <p><span className={styles.label}>Coordinates:</span> long: {longitude}, lat: {latitude}</p>
          <p><span className={styles.label}>Temperature:</span> {temperature} °C </p>
          <p><span className={styles.label}>Humidity:</span> {humidity} % </p>
          <p><span className={styles.label}>Pressure:</span> {pressure} hpa </p>
          <p><span className={styles.label}>Wind speed:</span> {windSpeed} m/s </p>
          <p><span className={styles.label}>Conditions:</span> {description}</p>
          <p><span className={styles.label}>Data acquired from: </span> {base}</p>
        </React.Fragment>
      ) }
      { error && <p>{error}</p> }
    </div>
  )
}

export default Weather;

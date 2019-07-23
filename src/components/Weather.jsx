import React from "react";
import styles from './Weather.module.scss';

const Weather = (props) => {
  const { temperature, humidity, pressure, city, country,
    description, longitude, latitude, windSpeed, base, error } = props;
  return (
    <div>
      { city && (
        <React.Fragment>
          <p className={styles.weather}>Location: {city}, {country}</p>
          <p>Coordinates: long: {longitude}, lat: {latitude}</p>
          <p>Temperature: {temperature}</p>
          <p>Humidity: {humidity}</p>
          <p>Pressure: {pressure}</p>
          <p>Wind speed: {windSpeed}</p>
          <p>Conditions: {description}</p>
          <p><small>Data acquired from {base}</small></p>
        </React.Fragment>
      ) }
      { error && <p>{error}</p> }
    </div>
  )
}

export default Weather;

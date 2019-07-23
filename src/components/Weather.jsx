import React from "react";
import styles from './Weather.module.scss';

const Weather = (props) => {
  const { temperature, humidity, pressure, city, country,
    description, longitude, latitude, windSpeed, base, error } = props;
  return (
    <div className={styles.weather}>
      { city && (
        <React.Fragment>
          <p><span>Location:</span> {city}, {country}</p>
          <p><span>Coordinates:</span> long: {longitude}, lat: {latitude}</p>
          <p><span></span>Temperature: {temperature}</p>
          <p><span></span>Humidity: {humidity}</p>
          <p><span></span>Pressure: {pressure}</p>
          <p><span></span>Wind speed: {windSpeed}</p>
          <p><span></span>Conditions: {description}</p>
          <p><span></span><small>Data acquired from {base}</small></p>
        </React.Fragment>
      ) }
      { error && <p>{error}</p> }
    </div>
  )
}

export default Weather;

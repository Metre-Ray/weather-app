import React from 'react';
import styles from './Form.module.css';

const Form = (props) => (
  <form action="" className={styles.formContainer} onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." className={styles.input} value={props.value1}/>
    <input type="text" name="country" placeholder="Country..." className={styles.input} value={props.value2}/>
    <button className={styles.button}>Get Weather</button>
  </form>
)

export default Form;

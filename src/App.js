import React, { Component } from 'react'
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import storageService from './components/services/storageService';

import './App.css';

const API_KYE = '8bf768353480692e06febb4c621734e9';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KYE}`;
export default class App extends Component {
  state = {
    tempreture: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    windSpeed: undefined,
    description: undefined,
    longitude: undefined,
    latitude: undefined,
    base: undefined,
    error: undefined
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    if (!city || !country) {
      this.setState({
        tempreture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        windSpeed: undefined,
        description: undefined,
        longitude: undefined,
        latitude: undefined,
        base: undefined,
        error: 'Please, enter city and country'
      })
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KYE}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    if (data.cod !== 200) {
      this.setState({
        tempreture: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        windSpeed: undefined,
        description: undefined,
        longitude: undefined,
        latitude: undefined,
        base: undefined,
        error: `Sorry, ${data.message}`
      })
      return;
    }
    this.setState({
      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      base: data.base,
      error: ''
    });
    storageService.setItems(city, country);
  }

  componentDidMount() {
    const [city, country] = storageService.getItems();
    this.value1 = city;
    this.value2 = country;
    console.log('mount', this.value1);
  }

  render() {
    return (
      <div className="app">
        <Titles></Titles>
        <Form getWeather={this.getWeather} ></Form>
        <Weather {...this.state}></Weather>
      </div>
    )
  }
}

// Задачи:
// 1. стилизовать
// 2. решить, куда поместить API ключ (может в базу firebase?? - но для доступа к ней
// тоже нужен ключ; тогда на хероку?) - почитать

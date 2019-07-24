import React, { Component } from 'react'
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import storageService from './services/storageService';

import './App.css';


// exposed on purpose
const API_KYE = '8bf768353480692e06febb4c621734e9';   // change this with your key


export default class App extends Component {
  state = {
    defaultCity: undefined,
    defaultCountry: undefined,
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
    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KYE}`;
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
    this.setState({
      defaultCity: city,
      defaultCountry: country
    });
  }

  render() {
    return (
      <div className="app">
        <Titles />
        <Form getWeather={this.getWeather} value1={this.state.defaultCity} value2={this.state.defaultCountry} />
        <Weather {...this.state} />
      </div>
    )
  }
}

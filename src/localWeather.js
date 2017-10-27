import React, { Component } from 'react';
import axios from 'axios';

class localWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      default: {}
    };
  }

  componentDidMount() {
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCNYEX2Bqag8Z0ICC1iiAKLkwL8VMh-Ioo`)
      .then(res => {
        const location = res.location;
      })
    
    axios.get(`api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&APPID=47fb3b26e84dcb54875b41acfcbc04a3`)
    .then(res => {
      const weather = res;
      this.setState({ weather })
    })
  }

  render() {
    return (
      //display current weather info
      <div>
        <h1>{this.state.main.temp}</h1>
        <h1>{this.state.weather.main}</h1>
        <h2>{this.state.weather.description}</h2>
      </div>
    )
  }
}

export default LocalWeather;
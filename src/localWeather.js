import React, { Component } from 'react';

class localWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {}
    };
  }

  componentDidMount() {
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCNYEX2Bqag8Z0ICC1iiAKLkwL8VMh-Ioo`)
      .then(res => {
        const location = res.location;
        this.setState({ location })
      })
    
    axios.get(`api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}APPID={47fb3b26e84dcb54875b41acfcbc04a3}`)
    //axios.get using lon/lat to find weather
  }

  render() {
    return (
      //display current weather info
      <div>
      </div>
    )
  }

}
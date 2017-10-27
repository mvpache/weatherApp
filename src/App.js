import React, { Component } from 'react';
import LocalWeather from './localWeather.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hello World
          <LocalWeather />
        </p>
      </div>
    );
  }
}

export default App;

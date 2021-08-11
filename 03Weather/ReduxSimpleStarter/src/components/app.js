import React from 'react' 
import { Component } from 'react';

import SearchBar from '../containers/sarch_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

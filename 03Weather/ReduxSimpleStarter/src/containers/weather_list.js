import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        console.log(temps);

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressure} color="blue" units="hPa" /></td>    
                <td><Chart data={humidity} color="green" units="%"/></td>    
                
            </tr>
        );
        
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// { weather }를 변수로 정의
// const weather = state.weather과 동일함
function mapStateToProps({ weather }) {
    return { weather }; // { weather } === { weather: weather }
}

// 실제 component와 함수를 mapStateToProps로 연결
export default connect(mapStateToProps) (WeatherList);
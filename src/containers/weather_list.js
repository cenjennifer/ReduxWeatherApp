import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		
		//es6 => deconstructing => grab the lon and lat variables and set it to new vars as lon and lat
		const { lon, lat } = cityData.city.coord;

		//es5
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}  /></td>
				<td><Chart data={temps} color="blue" units="F" /></td>
				<td><Chart data={pressures} color="purple" units="hPa" /></td>
				<td><Chart data={humidities} color="green" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

//ES5
// function mapStateToProps(state){
// 	return {
// 		weather: state.weather
// 	};
// }

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
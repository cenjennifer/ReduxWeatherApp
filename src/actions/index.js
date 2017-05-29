import axios from 'axios';

const API_KEY = '841ab832ef5d7191985d92098b73556e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//creating an action creator to make an api request to fetch the weather data => return object (action) w/type
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
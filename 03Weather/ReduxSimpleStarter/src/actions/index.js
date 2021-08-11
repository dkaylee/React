import axios from 'axios';

const API_KEY = '86f43ef05eccff557942d705c402dfe8';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid='+ API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// 백엔드 api로 요청을 보내는 action
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    // promise로 반환 = request
    const request = axios.get(url);

    // console.log('Request:', request);

    // payload의 key로 promise를 넣는것
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

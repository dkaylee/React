import axios from 'axios';

// api연동을 위한 axios
// 리덕스에서 비동기 작업을 쉽게 관리하기 위해 redux-saga
const client = axios.create();

/*
// 글로벌 설정 예시
// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = 'https://external-api-server.com/'

// 헤더설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b';

// 인터셉터 설정
axios.interceptors.response.use({
    response => {
        // 요청 성공 시 특정 작업 수행
        return response;
    },
    error => {
        // 요청 실패 시 특정 작업 수행
        return Promise.reject(error);
    }
})
*/

export default client;
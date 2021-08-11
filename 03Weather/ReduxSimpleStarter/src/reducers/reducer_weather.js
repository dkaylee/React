import { FETCH_WEATHER } from "../actions/index";

// state -> 유저권한
export default function(state = [], action) {
    // console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER :
            // 새 배열 생성
            // state.push(action.payload.data);

            // ES6 구문으로 바꾸기
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city,[ city, city ] ]
        }

    return state;
}
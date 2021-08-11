import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';

// redux-form에 reducer을 불러옴
// 변수이름 formReducer 다른 reducer 불러올 때 충돌을 피하기위해
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts : PostReducer,
  form: formReducer
});

export default rootReducer;

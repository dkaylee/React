import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionType,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGEFIELD'; // 특정 key 값 바꾸기
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createRequestActionType('write/WRITE_POST'); // 포스트 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      //post와 postError 초기화
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;

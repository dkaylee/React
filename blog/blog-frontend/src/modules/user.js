import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionType,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { takeLatest, call } from 'redux-saga/effects';

// 회원 로그인/로그아웃 관리
const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 회원정보확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionType('user/CHECK');

const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user'); // localStorage에서 user제거
  } catch (e) {
    console.log('localStorage is not working');
  }
}

export function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('user'); // localStorage에서 삭제
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: user }) => ({
      ...state,
      user: null,
      checkError: null,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

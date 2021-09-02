import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import { takeLatest } from 'redux-saga/effects';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
// 회원정보확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
    'user/CHECK',
);

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
}

const initialState = {
    user: null,
    checkError: null,
};

export default handleActions({
    [TEMP_SET_USER]: (state, {payload:user}) => ({
        ...state,
        user,
    }),
    [CHECK_SUCCESS]: (state, {payload:user}) => ({
        ...state,
        user,
        checkError:null,
    }),
    [CHECK_FAILURE]: (state, {payload:user}) => ({
        ...state,
        user:null,
        checkError:null,
    }),   
},
initialState,
);
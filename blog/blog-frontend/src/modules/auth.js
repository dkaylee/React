import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';

// const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
// const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
// const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionType(
    'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionType(
    'auth/LOGIN',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,  // register, login
        key,   // user, password, passwordConfirm
        value, // 실제 바꾸려는 값
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register/login
export const register = createAction(REGISTER, ({ username, password }) => ({
    username,
    password,
}));
export const login = createAction(LOGIN, ({ username, password })=> ({
    username,
    password,
}));

// 사가 생성
const registerSage = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN,authAPI.login);

export function* authSaga(){
     yield takeLatest(REGISTER, registerSage);
     yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    register: {
        username:'',
        password:'',
        paswwordConfirm:'',
    },
    login: {
        username:'',
        password:'',
    },
};
// export const sampleAction = createAction(SAMPLE_ACTION);

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
        produce(state, draft => {
            draft[form][key] = value; //예: state, register, username을 바꾼다.
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        }),
    },
    initialState,
);

export default auth;
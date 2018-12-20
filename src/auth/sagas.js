import { call, put, takeEvery, fork } from "redux-saga/effects";
import { push } from "connected-react-router";

import { authActions } from "./actions";
import { setUser, removeUser } from "../utils/auth";

import api from "./api";

// worker Saga: will be fired on SIGN_IN actions
function* login(action) {
  try {
    const response = yield call(api.login, action.payload.loginData);
    yield call(setUser, response);
    yield put({ type: authActions.SIGN_IN_SUCCESS, payload: response });
    yield put(push("/"));
  } catch (e) {
    yield put({ type: authActions.SIGN_IN_FAILED, message: e.message });
  }
}

function* register(action) {
  try {
    const response = yield call(api.register, action.payload.registerData);
    yield call(setUser, response);
    yield put({ type: authActions.REGISTER_SUCCESS, payload: response });
    yield put(push("/"));
  } catch (e) {
    yield put({ type: authActions.REGISTER_FAILED, message: e.message });
  }
}

function* logout(action) {
  try {
    yield call(removeUser);
    yield put({ type: authActions.LOGOUT_SUCCESS });
    yield put(push("/login"));
  } catch (e) {
    yield put({ type: authActions.LOGOUT_FAILED, message: e.message });
  }
}

/*
  Starts login on each dispatched `SIGN_IN` action.
  Allows concurrent fetches of user.
*/
function* watchLogin() {
  yield takeEvery(authActions.SIGN_IN, login);
}

function* watchRegister() {
  yield takeEvery(authActions.REGISTER, register);
}

function* watchLogout() {
  yield takeEvery(authActions.LOGOUT, logout);
}

export const authSagas = [
  fork(watchLogin),
  fork(watchRegister),
  fork(watchLogout)
];

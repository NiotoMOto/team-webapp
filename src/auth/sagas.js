import { call, put, takeEvery, fork } from "redux-saga/effects";
import { authActions } from "./actions";
import { setUser } from "../utils/auth";

import api from "./api";

// worker Saga: will be fired on SIGN_IN actions
function* login(action) {
  try {
    const response = yield call(api.login, action.payload.loginData);
    yield call(setUser, response);
    yield put({ type: authActions.SIGN_IN_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: authActions.SIGN_IN_FAILED, message: e.message });
  }
}

function* register(action) {
  try {
    const response = yield call(api.register, action.payload.registerData);
    yield call(setUser, response);
    yield put({ type: authActions.REGISTER_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: authActions.REGISTER_FAILED, message: e.message });
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

export const authSagas = [fork(watchLogin), fork(watchRegister)];

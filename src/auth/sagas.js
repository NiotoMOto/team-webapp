import { call, put, takeEvery, fork } from "redux-saga/effects";
import { authActions } from "./actions";

import api from "./api";

// worker Saga: will be fired on SIGN_IN actions
function* login(action) {
  try {
    const response = yield call(api.login, action.payload.loginData);
    yield put({ type: authActions.SIGN_IN_SUCCESS, payload: response });
    yield;
  } catch (e) {
    yield put({ type: authActions.SIGN_IN_FAILED, message: e.message });
  }
}

/*
  Starts login on each dispatched `SIGN_IN` action.
  Allows concurrent fetches of user.
*/
function* watchLogin() {
  let user = yield takeEvery(authActions.SIGN_IN, login);
  fork(login, user);
}

export const authSagas = [fork(watchLogin)];

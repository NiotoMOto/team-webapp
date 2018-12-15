import { call, put, takeEvery, fork } from "redux-saga/effects";
import { authActions } from "./actions";

import api from "./api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    const response = yield call(api.login, action.payload.loginData);
    yield put({ type: authActions.SIGN_IN_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: authActions.SIGN_IN_FAILED, message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watchLogin() {
  console.log("PASSSS");
  let user = yield takeEvery(authActions.SIGN_IN, login);
  fork(login, user);
}

export const authSagas = [fork(watchLogin)];

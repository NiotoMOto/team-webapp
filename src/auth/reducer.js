import { assoc, compose } from "ramda";
import { authActions } from "./actions";
import { loadLocalStorageAuth } from "../utils/auth";

const localStorageAuth = loadLocalStorageAuth();

console.log(localStorage.getItem("auth"));
export const initialState = {
  authenticated: !!localStorageAuth.token,
  token: localStorageAuth.token,
  id: localStorageAuth.id,
  uusername: localStorageAuth.username
};

export function authReducer(state = initialState, { payload, type }) {
  switch (type) {
    case authActions.SIGN_IN_SUCCESS:
    case authActions.REGISTER_SUCCESS:
      return compose(
        assoc("authenticated", true),
        assoc("token", payload.token),
        assoc("username", payload.username),
        assoc("userId", payload.id)
      )(state);

    case authActions.SIGN_IN_FAILED:
    case authActions.REGISTER_FAILED:
      return compose(
        assoc("authenticated", true),
        assoc("token", null),
        assoc("username", null),
        assoc("userId", payload.id)
      )(state);

    default:
      return state;
  }
}

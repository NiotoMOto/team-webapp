import { assoc, compose } from "ramda";
import { authActions } from "./actions";

export const initialState = {
  authenticated: false,
  uid: null,
  user: null
};

export function authReducer(state = initialState, { payload, type }) {
  console.log(type);
  switch (type) {
    case authActions.SIGN_IN_SUCCESS:
      return compose(
        assoc("authenticated", true),
        assoc("token", payload.token),
        assoc("username", payload.username)
      )(state);

    case authActions.SIGN_IN_FAILED:
      return compose(
        assoc("authenticated", false),
        assoc("id", null),
        assoc("user", null)
      )(state);

    default:
      return state;
  }
}

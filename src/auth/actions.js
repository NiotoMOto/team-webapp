export const authActions = {
  SIGN_IN: "auth/SIGN_IN",
  SIGN_OUT: "auth/SIGN_OUT",
  SIGN_IN_SUCCESS: "auth/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "auth/SIGN_IN_FAILED",

  login: loginData => ({
    type: authActions.SIGN_IN,
    payload: { loginData }
  })
};

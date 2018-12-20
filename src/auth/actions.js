export const authActions = {
  SIGN_IN: "auth/SIGN_IN",
  SIGN_IN_SUCCESS: "auth/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "auth/SIGN_IN_FAILED",

  REGISTER: "auth/REGISTER",
  REGISTER_SUCCESS: "auth/REGISTER_SUCCESS",
  REGISTER_FAILED: "auth/REGISTER_FAILED",

  LOGOUT: "auth/logout",
  LOGOUT_SUCCESS: "auth/LOGOUT_SUCCESS",
  LOGOUT_FAILED: "auth/LOGOUT_FAILED",

  login: loginData => ({
    type: authActions.SIGN_IN,
    payload: { loginData }
  }),
  register: registerData => ({
    type: authActions.REGISTER,
    payload: { registerData }
  }),
  logout: registerData => ({
    type: authActions.LOGOUT
  })
};

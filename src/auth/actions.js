export const authActions = {
  SIGN_IN: "auth/SIGN_IN",
  REGISTER: "auth/REGISTER",
  SIGN_OUT: "auth/SIGN_OUT",
  SIGN_IN_SUCCESS: "auth/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "auth/SIGN_IN_FAILED",
  REGISTER_SUCCESS: "auth/REGISTER_SUCCESS",
  REGISTER_FAILED: "auth/REGISTER_FAILED",

  login: loginData => ({
    type: authActions.SIGN_IN,
    payload: { loginData }
  }),
  register: registerData => ({
    type: authActions.REGISTER,
    payload: { registerData }
  })
};

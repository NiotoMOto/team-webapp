export function authHeader() {
  // return authorization header with jwt token
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth && auth.token) {
    return { Authorization: "Bearer " + auth.token };
  } else {
    return {};
  }
}

export const loadLocalStorageAuth = () =>
  JSON.parse(localStorage.getItem("auth")) || {};

export const isAuthentificated = () => !!localStorage.getItem("auth");

export const setUser = auth =>
  localStorage.setItem("auth", JSON.stringify(auth));

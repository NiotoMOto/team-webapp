export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

export const isAuthentificated = () => !!localStorage.getItem("user");

export const setUser = user => localStorage.setItem("user", user);

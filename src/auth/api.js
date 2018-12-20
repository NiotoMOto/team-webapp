import axios from "axios";
import { API_END_POINT } from "../config";

export const login = ({ username, password }) => {
  return axios
    .post(`${API_END_POINT}/auth/login`, { username, password })
    .then(res => {
      return res.data;
    });
};
export const register = ({ username, password }) => {
  return axios
    .post(`${API_END_POINT}/auth/register`, { username, password })
    .then(res => {
      return res.data;
    });
};

export default {
  login,
  register
};

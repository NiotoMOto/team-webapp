import axios from "axios";
import { API_END_POINT } from "../config";

export const login = ({ username, password }) => {
  return axios
    .post(`${API_END_POINT}/auth/login`, { username, password })
    .then(res => {
      console.log(res);
      return res.data;
    });
};

export default {
  login
};

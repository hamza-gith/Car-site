import axios from "axios";

const url = process.env.REACT_APP_apiUrl;

const login = axios.create({
  baseURL:url
});
login.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);



export { login,};

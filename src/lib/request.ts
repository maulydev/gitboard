// axiosConfig.js
import axios from "axios";

const request = axios.create({
  baseURL: "https://api.github.com", // Replace with your API base URL
});

request.interceptors.request.use(
  (config) => {
    // Do something before request is sent, like adding an auth token
    config.headers.Authorization = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default request;

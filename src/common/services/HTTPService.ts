import axios, { AxiosRequestConfig } from "axios";
import { serialize } from "object-to-formdata";

// const getConnector = (URL: string) => URL.toString().indexOf('?') > 0 ? '&':'?'

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "access-token": "",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (config?.headers) {
      config.headers["access-token"] = token;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

AxiosInstance.interceptors.response.use(
  // API errors are handled here
  (response) => {
    // if (response.data.code === 401) {
    //   localStorage.remove('token')
    //   window.location.pathname = '/login'
    // }

    return response;
  },
  // HTTP errors are handled here
  (error) => {
    if (error.code === "ERR_NETWORK") {
      console.log("Network error");
    }

    if (error.code === "ERR_CONNECTION_REFUSED") {
      console.log("Connection refused");
    }

    if (error.code === "ERR_CONNECTION_TIMED_OUT") {
      console.log("Connection timed out");
    }

    if (error.code === "ERR_INTERNET_DISCONNECTED") {
      console.log("Internet disconnected");
    }
  },
);

const HTTPService = {
  get: <Response = unknown>(url: string, config?: AxiosRequestConfig) =>
    AxiosInstance.get<Response>(url, config).then((response) => response.data),
  post: <Response = unknown, Request = unknown>(
    url: string,
    body?: Request,
    config?: AxiosRequestConfig,
  ) =>
    AxiosInstance.post<Response>(url, serialize(body), config).then(
      (response) => {
        console.log(response);
        return response.data;
      },
    ),
  delete: <Response = unknown>(url: string, config?: AxiosRequestConfig) =>
    AxiosInstance.delete<Response>(url, config).then(
      (response) => response.data,
    ),
  put: <Response = unknown>(
    url: string,
    body?: {},
    config?: AxiosRequestConfig,
  ) =>
    AxiosInstance.put<Response>(url, serialize(body), config).then(
      (response) => response.data,
    ),
};

export default HTTPService;

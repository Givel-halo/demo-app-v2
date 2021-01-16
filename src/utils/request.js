import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./auth";

const instance = axios.create({
  baseURL: "https://api.cat-shop.penkuoer.com",
  timeout: 5000,
});
//全局请求拦截，所有的请求发起之前做
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    NProgress.start();
    // Do something before request is sent
    config.headers.authorization = "Bearer " + getToken();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
//全局响应拦截，对结果做处理，发出请求后执行
// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    NProgress.done();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status == 401) {
      window.location.href = "/#/login";
    }
    console.dir(error);
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return instance.get(url, { params });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function del(url) {
  return instance.delete(url);
}

export function put(url, data) {
  return instance.put(url, data);
}

import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000
  })

  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    return Promise.reject(error);
  })

  instance.interceptors.response.use(res => {
    return res;
  }, err => {
    return Promise.reject(error);
  })

  return instance(config);
}
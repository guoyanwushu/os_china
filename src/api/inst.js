import axios from 'axios'
const inst = axios.create({
  // baseURL: 'https://www.oschina.net/action/openapi',
  baseURL: '/api',
  timeout: 10000,
})
const GET_OPTIONS = {
  access_token: process.env.VUE_APP_TOKEN,
  dataType: 'json'
}
export function Get(url, data) {
  console.log(Object.assign({}, data, GET_OPTIONS))
  return inst.get(url, {params: Object.assign({}, data, GET_OPTIONS)})
}
inst.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
inst.interceptors.response.use(function (response) {
  if (response.status == '200' && response.data) {
    return response.data
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

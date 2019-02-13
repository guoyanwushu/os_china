import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
const inst = axios.create({
  // baseURL: 'https://www.oschina.net/action/openapi',
  baseURL: '/api',
  timeout: 5000,
  retry: 4,
  retryDelay: 1000,
  retryRequests: {}
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
  Indicator.open('加载中...');
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log("request:"+error);
  return Promise.reject(error);
});
inst.interceptors.response.use(function (response) {
  if (response.status == '200' && response.data) {
    Indicator.close();
    return response.data
  }
}, function (err) {
  // 对响应错误做点什么
  Indicator.close();
  const config = err.config;
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout')!=-1) {
    inst.defaults.retryRequests[config.url] = inst.defaults.retryRequests[config.url]||1
    var retryCount = inst.defaults.retryRequests[config.url];
    if (retryCount >= config.retry) {
      delete inst.defaults.retryRequests[config.url]
      Toast({
        message: '网络异常，请检查您的网络!',
        position: 'center',
        duration: 1000
      });
      return Promise.reject(err);
    } else {
      Toast({
        message: '请求超时,正在重连!',
        position: 'center',
        duration: 1000
      });
      inst.defaults.retryRequests[config.url]++;
      config.baseURL = ''
      setTimeout(function () {
        inst(config)
      }, config.retryDelay)

    }

  } else {
    Toast(err.message);
    return Promise.reject(err);
  }
});

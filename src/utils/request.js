import axios from 'axios'
//import store from '@/store'
//import storage from 'store'
import { VueAxios } from "./axios";
//import { ACCESS_TOKEN } from "@/store/mutation-types";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000
})

const errorHandler = error => {
  return Promise.reject(error)
}

axiosInstance.interceptors.request.use(config => {
  return config
}, errorHandler)

axiosInstance.interceptors.response.use(config => config.data, errorHandler)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, axiosInstance)
  }
}

export default axiosInstance;

export {
  installer as VueAxios,
  axiosInstance as axios
}

import axios from 'axios'
import cookie from 'js-cookie'
import config from './api.config'

let instance = axios.create({
    headers: { 'content-type': 'application/json' },
    headers: { 'Authorization': cookie.get("Authorization") }
})

instance.defaults.baseURL = config.baseURL
instance.defaults.withCredentials = true

instance.interceptors.request.use(function (config) {
    config.headers.channelToken = cookie.get('channelToken')

    return config;
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})

export default instance;
import axios, { AxiosRequestHeaders } from 'axios'
import { userStore } from '@/store/index'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})
service.interceptors.request.use((config) => {
    const store = userStore();
    (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${store.token}`
    return config
}, e => {
    return Promise.reject(e)
})
service.interceptors.response.use((response) => {
    return response.data
}, e => {
    return Promise.reject(e)
})
export default service

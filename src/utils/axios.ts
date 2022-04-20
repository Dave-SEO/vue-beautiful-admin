import axios, { AxiosRequestHeaders } from 'axios'
import { userStore } from '@/store/index'
import { isTimeout } from '@/utils/auth'
import { ElMessage } from 'element-plus'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})
service.interceptors.request.use((config) => {
    const store = userStore()
    if (isTimeout()) {
        store.logout()
        return Promise.reject(new Error('登陆超时'))
    }
    (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${store.token}`
    return config
}, e => {
    return Promise.reject(e)
})
service.interceptors.response.use((response) => {
    return response.data
}, e => {
    const store = userStore()
    if (e.response && e.response.data) {
        switch (e.response.code) {
            case 401:
                store.logout()
                break

            default:
                break
        }
    }
    ElMessage.error(e.message)
    return Promise.reject(e)
})
export default service

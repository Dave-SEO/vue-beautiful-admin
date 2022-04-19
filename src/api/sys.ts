import request from '@/utils/axios'
import { AxiosPromise } from 'axios'
/**
 * @description 登陆
 */
export const login = <T = any>(data: any): AxiosPromise<T> => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export const userinfo = <T = any>(): AxiosPromise<T> => {
    return request({
        url: '/userinfo',
        method: 'get'
    })
}

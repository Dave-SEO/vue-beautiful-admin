import request from '@/utils/axios'
/**
 * @description 登陆
 */
export const login = <T = any>(data: any): Promise<T> => {
    return request({
        url: '/login',
        method: 'post',
        data
    }) as any
}

export const userinfo = <T = any>(): Promise<T> => {
    return request({
        url: '/userinfo',
        method: 'get'
    }) as any
}

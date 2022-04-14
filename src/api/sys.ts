import request from '@/utils/axios'

/**
 * @description 登陆
 */
export const login = (data: any) => {
    return request({
        url: '/sys/login',
        method: 'post',
        data
    })
}

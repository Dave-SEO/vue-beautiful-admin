import { defineStore } from 'pinia'
import { login as getlogin } from '@/api'
export const userStore = defineStore('user', {
    state: () => ({

    }),
    getters: {},
    actions: {
        login(data: any) {
            return new Promise((resolve, reject) => {
                getlogin(data).then(res => {
                    resolve(res.data)
                }).catch(e => {
                    reject(e)
                })
            })
        }
    }
})

import { defineStore } from 'pinia'
import { login as getlogin } from '@/api'
import Storage from '@/utils/Storage'
import { TOKEN } from '@/constant'
const store = new Storage()

export const userStore = defineStore('user', {
    state: () => ({
        token: store.getItem<string>(TOKEN)
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

import { defineStore } from 'pinia'
import { login as getlogin, userinfo } from '@/api'
import Storage from '@/utils/Storage'
import { TOKEN } from '@/constant'
const store = new Storage()
interface LoginReturnParams {
    code: number;
    data: {token: string};
    message: string;
}
type UserInfoProps = {
    role: {id: number, title: string}[],
    id: string,
    username: string,
    title: string,
    avatar: string,
    permission: {
        menus: string[]
        points: string[]
    }
}
interface UserInfoReturnParams {
    code: number;
    data: UserInfoProps | null;
    message: string;
}

interface StateProps {
    token: string;
    userinfo: UserInfoProps | null
}
export const userStore = defineStore('user', {
    state: (): StateProps => ({
        token: store.getItem<string>(TOKEN),
        userinfo: null
    }),
    getters: {},
    actions: {
        login(data: any): Promise<LoginReturnParams> {
            return new Promise((resolve, reject) => {
               getlogin(data).then(res => {
                    resolve(res as any)
                }).catch(e => {
                    reject(e)
                })
            })
        },
        getUserInfo(): Promise<UserInfoReturnParams> {
            return new Promise((resolve, reject) => {
                userinfo().then(res => {
                     resolve(res as any)
                 }).catch(e => {
                     reject(e)
                 })
             })
        }
    }
})

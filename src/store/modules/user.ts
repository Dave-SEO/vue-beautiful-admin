import { defineStore } from 'pinia'
import { login as getlogin, userinfo } from '@/api'
import Storage from '@/utils/Storage'
import { TOKEN, Page, LONG_TIME_STAMP, TIME_STAMP } from '@/constant'

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
               getlogin<LoginReturnParams>(data).then(res => {
                    this.token = res.data.token
                    store.setItem(TOKEN, res.data.token)
                    // 当前登陆时间
                    store.setItem(TIME_STAMP, Date.now())
                    this.router.push(Page.HOME)
                    resolve(res)
                }).catch(e => {
                    reject(e)
                })
            })
        },
        getUserInfo(): Promise<UserInfoReturnParams> {
            return new Promise((resolve, reject) => {
                userinfo().then(res => {
                     resolve(res)
                 }).catch(e => {
                     reject(e)
                 })
             })
        },
        logout() {
            store.removeItem(TOKEN)
            store.removeItem(TIME_STAMP)
            this.token = ''
            this.userinfo = null
            this.router.push('/login')
        }
    }
})

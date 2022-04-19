import { Router } from 'vue-router'
import { userStore } from '@/store'
const whitePathList: string[] = ['/login']
export const permissionGuard = (router: Router) => {
    router.beforeEach(async (to, from, next) => {
        const store = userStore()
        if (store.token) {
            if (to.path === '/login') {
                next('/')
            } else {
                if (!store.userinfo) {
                  const { code, data } = await store.getUserInfo()
                  store.userinfo = data
                }
                next()
            }
        } else {
            if (whitePathList.indexOf(to.path) > -1) {
                next()
            } else {
                next('/login')
            }
        }
    })
}

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'
import layouts from '@/layouts/index.vue'
const privateRoute: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: layouts,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'icon-personnel'
    },
    children: [
      {
        path: '/manage',
        name: 'manage',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: 'manage',
          icon: 'icon-manage'
        }
      },
      {
        path: '/roleList',
        name: 'roleList',
        component: import('@/views/user/roleList.vue'),
        meta: {
          title: 'roleList',
          icon: 'icon-role'
        }
      },
      {
        path: '/promiseList',
        name: 'promiseList',
        component: import('@/views/user/promiseList.vue'),
        meta: {
          title: 'promiseList',
          icon: 'icon-promise'
        }
      }
    ]
  }
]
const publicRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...publicRoute, ...privateRoute]
})
setupRouterGuard(router)
export default router

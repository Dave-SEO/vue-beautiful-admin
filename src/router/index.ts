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
  },
  {
    path: '/article',
    component: layouts,
    meta: {
      title: 'article',
      icon: 'icon-article'
    },
    children: [
      {
        path: '/create',
        name: 'create',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: 'create',
          icon: 'icon-create'
        }
      },
      {
        path: '/detail',
        name: 'detail',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: 'manage',
          icon: 'icon-manage'
        }
      },
      {
        path: '/ranling',
        name: 'ranling',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: 'manage',
          icon: 'icon-manage'
        }
      }
    ]
  }
]
const publicRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layouts,
    redirect: '/usercenter',
    children: [
      {
        path: '/usercenter',
        name: 'usercenter',
        component: import('@/views/user_center/index.vue'),
        meta: {
          title: 'usercenter',
          icon: 'icon-usercenter'
        }
      },
      {
        path: '/404',
        name: '404',
        component: import('@/views/sys/404.vue')
      }
    ]
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

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'
import layouts from '@/layouts/index.vue'
const privateRoute: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: layouts,
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'yonghu'
    },
    children: [
      {
        path: '/manage',
        name: 'manage',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: '员工管理',
          icon: 'yuangongguanli'
        }
      },
      {
        path: '/roleList',
        name: 'roleList',
        component: import('@/views/user/roleList.vue'),
        meta: {
          title: '角色列表',
          icon: 'jiaoseliebiao'
        }
      },
      {
        path: '/promiseList',
        name: 'promiseList',
        component: import('@/views/user/promiseList.vue'),
        meta: {
          title: '权限列表',
          icon: 'quanxian'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layouts,
    meta: {
      title: '文章',
      icon: '3dtouchwenzhangxiangqingliebiao'
    },
    children: [
      {
        path: '/create',
        name: 'create',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: '创建文章',
          icon: 'chuangjiandingdan'
        }
      },
      {
        path: '/detail',
        name: 'detail',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: '文章详情',
          icon: 'bianjiwenzhang_huaban'
        }
      },
      {
        path: '/ranling',
        name: 'ranling',
        component: import('@/views/user/manage.vue'),
        meta: {
          title: '文章排名',
          icon: 'paihangbang_paiming'
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
          title: '个人中心',
          icon: 'gerenzhongxin'
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

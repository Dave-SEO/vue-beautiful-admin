import path from 'path'
/**
 * @description 判断 val 是否为空
 */
export function isNull(val: any): val is boolean {
    if (!val) return true
    if (JSON.stringify(val) === '[]') return true
    if (JSON.stringify(val) === '{}') return true
    return false
}
/**
 * @description 获取所有的子路由
 */
const getChildRoutes = (routers: any[]) => {
   const result: any[] = []
   routers.forEach(router => {
       if (router.children && router.children.length > 0) {
        result.push(...router.children)
       }
   })
   return result
}

/**
 * @description 过滤脱离层级的路由
 */
export const filterRouters = (routers: any[]) => {
    // 获取所有子路由
    const childRoutes = getChildRoutes(routers)
   return routers.filter((route) => {
       return !childRoutes.find(childRoute => {
          return childRoute.path === route.path
        })
    })
}

/**
 * @description 获取有 meta && meta.title && meta.icon 的路由 生成路由对应的菜单项
 */
export const generateMenus = (routes:any[], basePath = '') => {
    // 存放 icon && title 的路由
    const result: any [] = []
    // eslint-disable-next-line no-debugger
    routes.forEach(route => {
        // 无children, 无 meta 直接 return
        if (isNull(route.children) && isNull(route.meta)) {
            return false
        }
        // eslint-disable-next-line no-debugger
        // 有 children，无 meta 迭代 generateMenus
        if (!isNull(route.children) && isNull(route.meta)) {
            result.push(...generateMenus(route.children))
            return false
        }
        // 有 meta, 无 children
        const routePath = path.resolve(basePath, route.path)
        // 路由分离之后，可能存在同名父路由
        let routeResult = result.find(item => item.path === routePath)
        if (!routeResult) {
            routeResult = {
                ...route,
                path: routePath,
                children: []
            }
            // icon && title
            if (routeResult.meta.icon && routeResult.meta.title) {
                result.push(routeResult)
            }
        }
        // 有 meta 有 children
        if (!isNull(route.children)) {
            routeResult.children.push(...generateMenus(route.children, routeResult.path))
        }
    })
    return result
}

import { Router } from 'vue-router'
import { permissionGuard } from './permission'

export function setupRouterGuard(router: Router) {
    permissionGuard(router)
}

import { App } from 'vue'
import { createPinia } from 'pinia'
export * from './modules/user'
const store = createPinia()

export function setupStore(app: App) {
  app.use(store)
}

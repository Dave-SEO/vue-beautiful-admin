import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import { createPinia } from 'pinia'
const store = createPinia()
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import { setupStore } from '@/store/index'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
setupStore(app)
app.mount('#app')

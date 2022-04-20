import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import { createPinia } from 'pinia'
import { myPiniaPlugin } from '@/store'
const store = createPinia()
store.use(myPiniaPlugin)
createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')

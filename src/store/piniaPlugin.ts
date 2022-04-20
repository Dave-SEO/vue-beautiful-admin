import { PiniaPluginContext } from 'pinia'
import { markRaw } from 'vue'
import router from '@/router'
export function myPiniaPlugin(context: PiniaPluginContext) {
    const { store } = context
    store.router = markRaw(router)
}

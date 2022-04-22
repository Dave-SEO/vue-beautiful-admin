import Storage from '@/utils/Storage'
import { TIME_STAMP, LONG_TIME_STAMP } from '@/constant'
/**
 * @description 计算超时登陆
 * @returns boolean
 */
export const isTimeout = () => {
    const store = new Storage()
    const current = Date.now()
    const oldTime = store.getItem(TIME_STAMP)
    if (oldTime) {
      return current - oldTime > LONG_TIME_STAMP
    }
    return false
}

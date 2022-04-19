const isJSON = function(str: string) {
    if (typeof (str) === 'string') {
        try {
            const obj = JSON.parse(str)
            if (typeof (obj) === 'object' && obj) {
                return true
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    }
}
export default class Storage {
    getItem<T = any>(key: string): T {
       const value = window.localStorage.getItem(key) || ''
       return isJSON(value) ? JSON.parse(value) : value
    }

    setItem(key: string, value: any) {
        if (typeof value === 'object') value = JSON.stringify(value)
        window.localStorage.setItem(key, value)
    }

    removeItem(key: string) {
        window.localStorage.removeItem(key)
    }
}

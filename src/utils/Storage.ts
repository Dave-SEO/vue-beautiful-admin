export default class Storage {
    getItem<T = any>(key: string): T {
       const value = window.localStorage.getItem(key)
       return value ? JSON.parse(value) : ''
    }

    setItem(key: string, value: any) {
        if (typeof value === 'object') value = JSON.stringify(value)
        window.localStorage.setItem(key, value)
    }

    removeItem(key: string) {
        window.localStorage.removeItem(key)
    }
}

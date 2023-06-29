
export function getLocalStorage(key) {
    const keyExist = localStorage.getItem(key)
    if (keyExist) {
        return JSON.parse(localStorage.getItem(key))
    }
    else {
        return `data with key ${key} does not exist in local Storege`
    }
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key)
}

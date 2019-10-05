export const setStorage = (name, item) => localStorage.setItem(name, item)
export const getStorage = name => localStorage.getItem(name)
export const clearStorage = () => localStorage.clear();
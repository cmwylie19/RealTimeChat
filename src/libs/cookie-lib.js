import Cookies from 'js-cookie'

export const readCookies = () => Cookies.get()

export const setCookie = (name, value, expires ) => {
    Cookies.set(name, value, { expires })
}

export const getCookie = name => {
    Cookies.get(name)
}

export const clearCookies = () => Cookies.remove()
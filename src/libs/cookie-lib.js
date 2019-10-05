import Cookies from 'js-cookie'

export const readCookies = () => Cookies.get()

export const setCookie = (name, value, expires ) => {
    Cookies.set(name, value, { expires })
}

export const getCookie = name => {
    Cookies.get(name)
}

export const clearCookies = () => Cookies.remove()


export const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
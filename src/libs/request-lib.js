import axios from 'axios'

const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    'Access-Control-Allow-Origin': 'http://localhost:8080/auth',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': ' Origin, Content-Type, Authorization, Content-Length, X-Requested-With',
    'Accept': 'application/x-www-form-urlencoded'
}

export const instance = baseURL => axios.create({
    baseURL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': ' Origin, Content-Type, Authorization, Content-Length, X-Requested-With',
        "Access-Control-Allow-Credentials": true
    },
});


export function headerRequest(request, header, value) {
    return request.headers[header] = value;
}

export const setSession = async (exp, idToken, name) => await instance('http://localhost:3332', { crossdomain: true }).get(`/store/${exp}/${idToken}\?value=${name}`);

export const deleteSession = async (name) => await instance('http://localhost:3332', { crossdomain: true }).get(`/delete/${name}`)

export const fetchAll = async () => await instance('http://localhost:3332', { crossdomain: true }).get(`/all`)

export const logout = async ({ userLogout, keycloak, clearCookies }) => {
    await keycloak.logout();
    userLogout();
    clearCookies()
}
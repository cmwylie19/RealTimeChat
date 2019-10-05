import axios from 'axios'

export const instance = baseURL => axios.create({
  baseURL,
  timeout: 1000,
  headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
});

export function headerRequest(request, header, value) {
    return request.headers[header] = value;
}

export const authRequest = (request, header, value) => {
    request.headers[header] = value
    return request;
}
export const setSession = async (exp,idToken,name)=> await instance('http://localhost:3332',{ crossdomain: true }).get(`/store/${exp}/${idToken}\?value=${name}`);
       
export const deleteSession =async (name)=> await instance('http://localhost:3332',{ crossdomain: true }).get(`/delete/${name}`)
export const fetchAll =async ()=> await instance('http://localhost:3332',{ crossdomain: true }).get(`/all`)

export const logout = async ({userLogout,keycloak,clearCookies}) => {
       await keycloak.logout();
        userLogout();
        clearCookies()
}
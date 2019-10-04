import axios from 'axios'

export const fetchInstance = options => {
    
    // const options = {
    //     method: 'post',
    //     url: '/login',
    //     xsrfCookieName: 'XSRF-TOKEN',
    //     xsrfHeaderName: 'X-XSRF-TOKEN',
    //   };

    return axios(options)
}

export const instance = baseURL => axios.create({
  baseURL,
  timeout: 1000,
  headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      crossdomain: true 
    },
});

export function headerRequest(request, header, value) {
    return request.headers[header] = value;
}

export const authRequest = (request, header, value) => {
    request.headers[header] = value
    return request;
}
// const compose = (...fns) =>
//   fns.reduce((f, g) => (...args) => f(g(...args)));



// }
// // AXIOS INSTANCE 
// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' },
//     // `responseType` indicates the type of data that the server will respond with
//     // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
//     //   browser only: 'blob'
//     responseType: 'json', // default
// });

// export const signout = ()=> {
//    return axios.delete(`${process.env.REACT_APP_AUTH_SERVICE}/user/token/me`)
//    .then()
//    .catch()
//    .finally()
// }
// export const currentUser = () => {
//     return axios.get(`${process.env.REACT_APP_AUTH_SERVICE}/user/me`)
//     .then()
//     .catch()
//     .finally()
// }
// export const login = (email, password) => {
    
//     return axios.post(`${process.env.REACT_APP_AUTH_SERVICE}/user/login`, {
//         email,
//         password
//     })
//         .then()
//         .catch()
//         .finally()
// }

// export const signup = async (email, password, first, last, ) => {
//     return axios.post(`${process.env.REACT_APP_AUTH_SERVICE}/user`)
//         .then()
//         .catch()
//         .finally()
// }

// export const getCacheSessions = () => {
//     // GET request for remote image
//     axios({
//         method: 'get',
//         url: 'http://bit.ly/2mTM3nY',
//         responseType: 'stream'
//     })
//         .then(function (response) {
//             response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//         });
// }
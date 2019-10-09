const { app } = require('../index.js')
import request from 'supertest'


/**
 * Testing for api cache endpoints
 */
describe('Endpoints for Cache API', () => {
    
    // Store key in the cache: 
    const { key, value, exp, UserCache } = component;
     it('SET_KEY store/10000/myKey\?value=myKeyValue', (done) => {
      return request(app).get('/store/10000/myKey\?value=myKeyValue')
       .expect(200, done)
        .then(() => {
         expect(UserCache).toContainer(key)
         })
        });

    // Retreive key from cache
    it('GET_KEY /name/myKey', (done) => {
    return request(app).get('/name/myKey')
     .expect(200, done)
      .then(response => {
        expect(response).toEqual(value);
        })
       })

    // Scan the Cache all keys the cash
    it('SCAN_STREAN /all', (done) => {
     return request(app).get('/all')
      .expect(200, done)
       .then(response => {
        expect(response).toEqual(1)
        })
       });

    // Delete one key from cache
    it('DEL_KEY /delete/myKey', (done) => {
    return request(app).get('/delete/myKey')
     .expect(200, done)
      .then(response=>{
        expect(UserStore).not.toContain(key)
       })
      })
    
     // Download avatar from url
    it('DOWNLOAD  /img/:id', (done) => {
     return request(app).post('/img/logo')
      .expect(200, done)
      .then(response=>{
        expect(UserStore).not.toContain(key)
       })
      })
      
})

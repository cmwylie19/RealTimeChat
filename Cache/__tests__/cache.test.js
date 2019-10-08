const { app } = require('../index.js')
import request from 'supertest'

afterEach(async () => {
    app.disable()
    app.disable();
})


/**
 * Testing get all user endpoint
 */
describe('SET_KEY store/10000/myKey\?value=myKeyValue', function () {
    it('responde 200 status code', function (done) {
        request(app)
            .get('/store/10000/myKey\?value=myKeyValue')
            .expect(200, done);
    });
});

describe(`GET_KEY /name/myKey`, () => {
    it('responde 200 status code', function (done) {
        request(app)
            .get('/name/myKey')
            .expect(200, done)
    });

})

describe(`FETCH_ALL /all`, () => {
    it('responde 200 status code', function (done) {
        request(app)
            .get('/all')
            .expect(200, done)
    });

})
describe(`DEL_KEY /delete/myKey`, () => {
    it('responde 200 status code', function (done) {
        request(app)
            .get('/delete/myKey')
            .expect(200, done)
    });
})


describe(`DOWNLOAD  /img/:id`, () => {
    it('responde 200 status code', function (done) {
        request(app)
            .post('/img/logo')
            .expect(200,done)
    });
})

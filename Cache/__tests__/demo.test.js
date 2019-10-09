const http = require('http');

describe('demo', () => {
  let server;

  beforeAll(done => {
    server = http.createServer((req, res) => {
      res.write('ok');
      res.end();
    });
    server.listen(done);
  });

  afterAll(done => {
    server.close(done);
  });

  test('my test', async () => {});
});
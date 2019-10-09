describe('UserStore API', () => {

  describe('Tests for UserStore', () => {
    // properties expected
    let expectedProps = { id };
    it('should return JSON array', () => {
      return request(app).get('/api/v1/produce')
      .expect(200)
      .then(res => {
        // check that it sends back an array
        expect(res.body).toBeInstanceOf(Array);
      });
    });

    // properties expected on an obj in the response
    let expectedProps = ['id', 'name', 'quantity', 'price'];
    it('should return JSON array', () => {
      return request(app).get('/api/v1/produce')
      .expect(200)
      .then(res => {
        // check that it sends back an array
        expect(res.body).toBeInstanceOf(Array);
      });
    });
    it('should return objs w/ correct props', () => {
      return request(app).get('/api/v1/produce')
      .expect(200)
      .then(res => {
        // check for the expected properties
        let sampleKeys = Object.keys(res.body[0]);
        expectedProps.forEach((key) => {
          expect(sampleKeys.includes(key)).toBe(true);
        });
      });
    });
    it('shouldn\'t return objs w/ extra props', () => {
      return request(app).get('/api/v1/produce')
      .expect(200)
      .then(res => {
        // check for only expected properties
        let extraProps = Object.keys(res.body[0]).filter((key) => {
          return !expectedProps.includes(key);
        });
        expect(extraProps.length).toBe(0);
      });
    });
  });

});
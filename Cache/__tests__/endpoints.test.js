import axios from 'axios'
jest.mock('axios');


describe('Post Endpoints', () => {
   it('should create a new post', async () => {
  
    const resp = 'OK'
    let res = await axios.get.mockResolvedValue(resp)
    // const res = await axios.get(`http://localhost:3332/store/10000/myKey\?value=myKeyValue`)
    // //   .post('/api/posts')
    // //   .send({
    // //     userId: 1,
    // //     title: 'test is cool',
    // //   })

    axios.get.mockImplementation(() => Promise.resolve(resp))
     expect(res.statusCode).toEqual(201)
    // expect(res.body).toHaveProperty('post')
  })
})
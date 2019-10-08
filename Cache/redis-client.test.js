// import redis from 'ioredis'
// import bluebird from 'bluebird'
// import { promisify } from 'util'
// import axios from 'axios';


// const client = new redis()
// bluebird.promisifyAll(client);



// const setKey = (key, value, ex) => {
//   try {
//     return axios.get(`http://localhost:3332/store/${ex}/${key}\?value=${value}`)
//   } catch (error) {
//     console.error(error)
//   }
// }

// const getKey = (key) => {
//   try {
//     return axios.get(`http://localhost:3332/name/${key}`)
//   } catch (error) {
//     console.error(error)
//   }
// }

// // const countBreeds = async () => {
// //   const breeds = getBreeds()
// //     .then(response => {
// //       if (response.data.message) {
// //         console.log(
// //           `Got ${Object.entries(response.data.message).length} breeds`
// //         )
// //       }
// //     })
// //     .catch(error => {
// //       console.log(error)
// //     })
// // }

// // countBreeds()
// // w

// // beforeEach(() => {
// //   const client = new redis();
// //   return client
// //     .flushdb()
// //     .then(() => {
// //       return utils.newQueue();
// //     })
// //     .then(_queue => {
// //       queue = _queue;
// //     });
// // });

// //urlFetcher 
// //http://localhost:3332/store/10000/myKey\?value=myKeyValue
// function promisifyRequest(request) {
//   return new Promise(function (resolve, reject) {
//     request.onsuccess = function () {
//       resolve(request.result);
//     };

//     request.onerror = function () {
//       reject(request.error);
//     };
//   });
// }


// describe("Unit tests for the Cache API", async () => {
//   test('Set key end point integration test', async () => {
//     Promise.all(new Array(10).map(async (key, value, index) => {
//       setKey(key, value, 160)
//         .catch(err => err)
//     })).then(values=>{
//       expect(values.length).toEqual(10)
//        values.map((val,i)=>{
//         expect(setKey()).resolves.toBe('ok');
//         expect(val).toEqual("OK")
//        })
//     })

   

//     test('the data is peanut butter', () => {
//       return 
//     });
//     // expect(setAsync).toHaveBeenCalledTimes(10)
//     // it("Pulls 10 values from the store", () => {
//     //   new Array(10).map(async (key, value, index) => {
//     //     getAsync(index)
//     //       .catch(err => err)
//     //   })
//     //   expect(getAsync).toHaveBeenCalledTimes(10)
//     // })
//   })
// })



// //       it("should call setAsync and return a OK ten times", () => {
// //         new Array(10).map(async (key, value, index) => {
// //           await setAsync(index, generator(), 'EX', '200');
// //         })

// //         it("should call setAsync and return a OK ten times", () => {
// //           new Array(10).map(async (key, value, index) => {
// //             await setAsync(index, generator(), 'EX', '200');
// //           })
// //     })
// //   })
// // })
// //      // setAsync(`concurrent:${key}`, value, 'EX', ex);
//     //   let p = cacher.get(key);
//     //   expect(cacher.client.get).toHaveBeenCalledTimes(1);
//     //   expect(cacher.client.get).toHaveBeenCalledWith(prefix + key);
//     //   return p.catch(protectReject).then((d) => {
//     //     expect(d).toEqual(data1);
//     //   });
//     // });

//     // it("should call client.del with key", () => {
//     //   cacher.del(key);
//     //   expect(cacher.client.del).toHaveBeenCalledTimes(1);
//     //   expect(cacher.client.del).toHaveBeenCalledWith([prefix + key]);
//     // });

//     // describe("Test RedisCacher close", () => {
//     //   let broker = new ServiceBroker({ logger: false });
//     //   let cacher = new RedisCacher();
//     //   cacher.init(broker); // for empty logger

//     //   it("should call client.quit", () => {
//     //     cacher.close();
//     //     expect(cacher.client.quit).toHaveBeenCalledTimes(1);
//     //   });
//     // });

//     // it("should call client.del with key", () => {
//     //   return cacher.del(key)
//     //     .catch(protectReject)
//     //     .then(() => {
//     //       expect(cacher.client.del).toHaveBeenCalledTimes(1);
//     //       expect(cacher.client.del).toHaveBeenCalledWith([prefix + key]);
//     //     });
//     // });

//     // expect(redis.get())




// // beforeEach(() => {
// //   const generator = `#+${Math.floor(Math.random()*16777215).toString(16)}'`
// //     new Array(100).map((key, value, index)=>{
// //       redis.setAsync(key,generator ,EX,'10');
// //     })



// //     // // setup a DOM element as a render target
// //     // container = document.createElement("div");
// //     // document.body.appendChild(container);
// //   });

// //   afterEach(() => {
// //     redis.pipeline()
// //     pipeline.del(`testing:*`);
// //     pipeline.exec((err,result)=>err?err:result)
// //     // cleanup on exiting
// //     unmountComponentAtNode(container);
// //     container.remove();
// //     container = null;
// //   });

// // describe("Integration tests for Cache Endpoints",()=>{
// //     test('Correct values are going into the cache',async ()=>{
// //       new Array(100).map((key, value, index)=>{
// //         redis.setAsync(index,generator() ,'EX','200');
// //       })

// //       expect(redis.get())


// // //       expect(redis.get)
// // //     })
// // //         setAsync('key','val)
// // //         test('Expect to receive query object',()=>{

// // //         })
// // //         test('expect to recieve exp params',()=>{})
// // //         test('expect to receive key url param',()=>{

// // //         })

// // //     })
// // // })


// // // // test('two plus two is four', () => {
// // // //     expect(2 + 2).toBe(4);
// // // //   });




// //   it("renders with or without a name", () => {
// //     act(() => {
// //       render(<Hello />, container);
// //     });
// //     expect(container.textContent).toBe("Hey, stranger");

// //     act(() => {
// //       render(<Hello name="Jenny" />, container);
// //     });
// //     expect(container.textContent).toBe("Hello, Jenny!");

// //     act(() => {
// //       render(<Hello name="Margaret" />, container);
// //     });
// //     expect(container.textContent).toBe("Hello, Margaret!");
// //   });
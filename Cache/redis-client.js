import redis from 'ioredis'
import bluebird from 'bluebird'
import { promisify } from 'util'

//bluebird.promisifyAll(redis);

//const client = redis.createClient();
const client = new redis()
client.set(`concurrent`, '');
export const getAsync = promisify(client.get).bind(client)
export const setAsync = promisify(client.set).bind(client);
export const keysAsync = promisify(client.keys).bind(client);

export const fetchAll =async() => {
    var keys = [];

    var stream = client.scanStream({
        match: "concurrent:*",
    });

    return new Promise((resolve,reject)=>{
     stream.on("data", resultKeys=> {
            for (var i = 0; i < resultKeys.length; i++) {
                keys.push(resultKeys[i]);
            }
        });
    stream.on("end", ()=> {
        Promise.all(Object.keys(keys).map( async (key,index)=>await getAsync(keys[key])))
           .then(res=>resolve(res))
           .catch(err=>reject(err))
         })
    })
}
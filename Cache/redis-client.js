import redis from 'ioredis'
import bluebird from 'bluebird'
import { promisify } from 'util'

const client = new redis()
bluebird.promisifyAll(client);
client.set(`concurrent`, '');


export const delAsync = key => {
    return new Promise((resolve, reject) => {
        client.del(key, (err, data) => err ? reject(err) : resolve(data))
    })
}

export const getAsync = promisify(client.get).bind(client)

export const setAsync = promisify(client.set).bind(client)

export const keysAsync = promisify(client.keys).bind(client)


export const fetchAll = async () => {
    var keys = [];

    var stream = client.scanStream({
        match: "concurrent:*",
    });

    return new Promise((resolve, reject) => {

        stream.on("data", resultKeys => {
            for (var i = 0; i < resultKeys.length; i++) {
                keys.push(resultKeys[i]);
            }
        });

        stream.on("end", () => {
            Promise.all(Object.keys(keys).map(async (key, index) => await getAsync(keys[key])))
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    })
    
}
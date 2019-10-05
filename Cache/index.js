import express from 'express'
import dotenv from 'dotenv'
import http from 'http';
import SocketIO from 'socket.io';
import request from 'request'
import cors from 'cors'
import { getAsync, setAsync, fetchAll, delAsync } from './redis-client'
import { createWriteStream } from 'fs';

export function validNick(nickname) {
    var regex = /^\w*$/;
    return regex.exec(nickname) !== null;
}

export function findIndex(arr, id) {
    var len = arr.length;

    while (len--) {
        if (arr[len].id === id) {
            return len;
        }
    }

    return -1;
}

export function sanitizeString(message) {
    return message.replace(/(<([^>]+)>)/ig, '').substring(0, 35);
}


dotenv.config();
const app = express();
app.use(cors())

let server = http.Server(app);
let io = new SocketIO(server);

app.get('/store/:ex/:key', async (req, res) => {
    const { key, ex } = req.params;
    const value = req.query.value;
    res
        .status(200)
        .header("Access-Control-Allow-Origin:*")
        .header("Access-Control-Allow-Credentials: true")
        .send(await setAsync(`concurrent:${key}`, req.query.value, 'EX', ex))
})

app.get('/name/:id', async (req, res) => {
    res
        .status(200)
        .send(await getAsync(`concurrent:${req.params.id}`))
})

app.get('/delete/:id', async (req, res) => {
    try {
        await delAsync(`concurrent:${req.params.id}`)
        res.send("cool")
    }
    catch (err) {
        res.send(err.message)
    }
})

app.get('/all', async (req, res) => {
    res
        .status(200)
        .send(await fetchAll())
})
app.post('/img/:id', (req, res) => {
    const outfile = createWriteStream(`./public/${req.params.id}.png`)
    request('http://localhost:3000/logo512.png').pipe(outfile)

})


io.on('connection', (socket) => {
    console.log("connected " + socket.id)
    socket.on('connection', () => socket.broadcast.emit("userSignin"))
    io.on("newMessageClient", data => {
        console.log("newCLientMessageIO " + data)
        io.broadcast.emit("newMessageServer", data)
    }
    );
    socket.on("newMessageClient", data => {
        console.log("newCLientMessageSoCKET " + JSON.stringify(data))
        socket.emit("newMessageServer", data)
    });


    socket.on('disconnect', () => socket.broadcast.emit("userSignout"))
    // socket.on("connect", () => io.emit("userSignin"));
});




server.listen(process.env.PORT, () => {
    console.log(`We are up listening on ${process.env.PORT}`)
})


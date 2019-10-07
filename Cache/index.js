import express from 'express'
import dotenv from 'dotenv'
import http from 'http';
import SocketIO from 'socket.io';
import request from 'request'
import cors from 'cors'
import { getAsync, setAsync, fetchAll, delAsync } from './redis-client'
import { createWriteStream } from 'fs';
import { log } from './libs'

dotenv.config();
const app = express();

app.use(cors())
app.use(express.static('public'))

let server = http.Server(app);
let io = new SocketIO(server);

app.get('/', (req, res) => {
    res.render(__dirname + '/public/index.html')
})

app.get('/store/:ex/:key', async (req, res) => {
    const { key, ex } = req.params;
    const  { value } = req.query;
    res.status(200)
        .header("Access-Control-Allow-Origin:*")
        .header("Access-Control-Allow-Credentials: true")
        .send(await setAsync(`concurrent:${key}`, value, 'EX', ex))
})

app.get('/name/:id', async (req, res) => {
    res.status(200)
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
    res.status(200).send(await fetchAll())
})

app.post('/img/:id', (req, res) => {
    const outfile = createWriteStream(`./public/${req.params.id}.png`)
    request('http://localhost:3000/logo512.png')
    .pipe(outfile)
})

io.on('connection', (socket) => {

    log("connected " + socket.id)

    socket.emit("connection", socket.id)

    socket.on('connection', () => socket.broadcast.emit("userSignin"))

    io.on("newMessageClient", data => {
        log("newCLientMessageIO " + data)
        io.emit("newMessageServer", data)
    });

    socket.on("newMessageClient", data => {
        log("newCLientMessageSoCKET " + JSON.stringify(data))
        io.emit("newMessageServer", data)
    });

    socket.on('disconnect', () => socket.broadcast.emit("userSignout"))
});

server.listen(process.env.PORT, () => {
    log(`We are up listening on ${process.env.PORT}`)
})


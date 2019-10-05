import express from 'express'
import dotenv from 'dotenv'
import http from 'http';
import SocketIO from 'socket.io';
import request from 'request'
import cors from 'cors'
import { getAsync, setAsync, fetchAll } from './redis-client'
import { createWriteStream } from 'fs';

export function validNick(nickname) {
    var regex = /^\w*$/;
    return regex.exec(nickname) !== null;
}

export function findIndex (arr, id) {
    var len = arr.length;

    while (len--) {
        if (arr[len].id === id) {
            return len;
        }
    }

    return -1;
}

export function sanitizeString( message ) {
    return message.replace(/(<([^>]+)>)/ig,'').substring(0, 35);
}


dotenv.config();
const app = express();
app.use(cors())

let server = http.Server(app);
let io = new SocketIO(server);

let users = [];
let sockets = {};

app.get('/store/:ex/:key', async (req,res)=>{
    const { key, ex } = req.params;
    const value = req.query.value;
    res
    .status(200)
    .header( "Access-Control-Allow-Origin:*")
    .header("Access-Control-Allow-Credentials: true")
    .send( await setAsync(`concurrent:${key}`, req.query.value,'EX', ex))
})

app.get('/name/:id',async (req,res)=>{
    res
    .status(200)
    .send(await getAsync(`concurrent:${req.params.id}`))
})

app.get('/all',async (req,res)=>{
    res
    .status(200)
    .send(await fetchAll())
})
app.post('/img',async (req,res)=>{
    const outfile = createWriteStream('./log1o.png')
    request('http://localhost:3000/logo512.png').pipe(outfile)
})



io.on('connection', (socket) => {
    let nick = socket.handshake.query.nick;
    let currentUser = {
        id: socket.id,
        nick: nick
    };

    if (findIndex(users, currentUser.id) > -1) {
        console.log('[INFO] User ID is already connected, kicking.');
        socket.disconnect();
    } else if (!validNick(currentUser.nick)) {
        socket.disconnect();
    } else {
        console.log('[INFO] User ' + currentUser.nick + ' connected!');
        sockets[currentUser.id] = socket;
        users.push(currentUser);
        io.emit('userJoin', {nick: currentUser.nick});
        console.log('[INFO] Total users: ' + users.length);
    }

    socket.on('ding', () => {
        socket.emit('dong');
    });

    socket.on('disconnect', () => {
        if (findIndex(users, currentUser.id) > -1) users.splice(findIndex(users, currentUser.id), 1);
        console.log('[INFO] User ' + currentUser.nick + ' disconnected!');
        socket.broadcast.emit('userDisconnect', {nick: currentUser.nick});
    });

    socket.on('userChat', (data) => {
        let _nick = sanitizeString(data.nick);
        let _message = sanitizeString(data.message);
        let date = new Date();
        let time = ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2);

        console.log('[CHAT] [' + time + '] ' + _nick + ': ' + _message);
        socket.broadcast.emit('serverSendUserChat', {nick: _nick, message: _message});
    });
});

server.listen(process.env.PORT,()=>{
    console.log(`We are up listening on ${process.env.PORT}`)
})

// // sending to sender-client only
// socket.emit('message', "this is a test");

// // sending to all clients, include sender
// io.emit('message', "this is a test");

// // sending to all clients except sender
// socket.broadcast.emit('message', "this is a test");

// // sending to all clients in 'game' room(channel) except sender
// socket.broadcast.to('game').emit('message', 'nice game');

// // sending to all clients in 'game' room(channel), include sender
// io.in('game').emit('message', 'cool game');

// // sending to sender client, only if they are in 'game' room(channel)
// socket.to('game').emit('message', 'enjoy the game');

// // sending to all clients in namespace 'myNamespace', include sender
// io.of('myNamespace').emit('message', 'gg');

// // sending to individual socketid
// socket.broadcast.to(socketid).emit('message', 'for your eyes only');

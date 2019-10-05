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

app.get('/delete/:id',async (req,res)=>{
    try {
        await delAsync(`concurrent:${req.params.id}`)
        res.send("cool")
    }
   catch(err){
       res.send(err.message)
   }
})

app.get('/all',async (req,res)=>{
    res
    .status(200)
    .send(await fetchAll())
})
app.post('/img/:id', (req,res)=>{
    const outfile = createWriteStream(`./${req.params.id}.png`)
    request('http://localhost:3000/logo512.png').pipe(outfile)
})

let currentUsers = [];

io.on('connection', (socket) => {
    console.log('new connection '+JSON.stringify(socket.handshake,undefined,2))
    let handshake = socket.handshake;
    let currentUser = {
        id: socket.id,
        handshake: handshake
    };

    socket.broadcast.to(socket.id).emit('newUserPrivate', currentUser);
    socket.on("newUserCreds",creds=> {
        currentUsers = [...currentUsers,creds]
    });

    socket.on("messagePrivate",message=>{
        console.log("\nGot a private message.\n"+message.content)
        console.log("\nGfrom \n"+message.from)
        console.log("\t to \n"+message.to)
        let to = message.to;
        let from = message.from;

        let user = currentUsers.filter(u=>u.name===to);
        socket.broadcast.to(user.id).emit('messagePrivate', message);

    })

    socket.on('disconnect', () => {
        //currentUsers.handshake;
    //    if (findIndex(currentUsers, currentUser) > -1) users.splice(findIndex(users, currentUser.id), 1);
        console.log('[INFO] User ' + currentUser.nick + ' disconnected!');
       // socket.broadcast.emit('userDisconnect', {name: currentUsers[index].name});
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

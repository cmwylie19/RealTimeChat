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
    const { value } = req.query;
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

let UserStore = {}
export var UserReducer = (state = { ...UserStore }, action) => {
    switch (action.type) {
        case "SET_USER":
            let store = { ...state };
            store[action.payload.id] = action.payload.username;
            state = { ...store };
            return state;
        case "DEL_USER":
            let tempStore = { ...state };
            Object.entries(state).map((key, index, acc) => {
                if (key[0] === action.payload.id) {
                    delete tempStore[key[0]]
                }
            })
            return tempStore;
        case "ALL_USERS":
            return { ...state }
        // case "SET_USER":
        //     let tempUser = Object.entries(state).map((key, index, acc) => {
        //         if (key[0] === action.payload.id) {
        //             return state[key[0]]

        //         }
        //     })
        //     return tempStore;
        default:
            return state
    }
}

const getUser = (id, UserStore) => {
    for (let user of Object.entries(UserStore)) {
        if (user[0] == id) {
            console.log(user[1])
            return user[1]
        }
    }
}

io.on('connection', async (socket) => {

    socket.broadcast.emit('SET_USER', {id:socket.id});

    log("Connection ",socket.id)
    io.emit("ASSOCIATE_USER", { id: socket.id })

    
    socket.on("addUser",({to,from,payload}) => {
        log('addUser\n\n'+'\n\n'+to+" "+from+" "+payload)
  
        let email = from;
        if (email !== "" && email !== undefined) {
            console.log(socket.id + "Set user " + email)
            UserReducer(UserStore, { type: "SET_USER", payload: { id: socket.id, email: from } })
            io.emit("PRIVATE_MESSAGE", { to:to, from:email , payload: payload })

        }
    })

        socket.on('privateMessage', (message) => {
            console.log('socket '+socket.id + "private msg " + JSON.stringify(message))
            io.to(socket.id).emit("PRIVATE_MESSAGE", { to:socket.id, from: message.from, payload: message.payload })
        })

        socket.on('disconnect', () => {
           // socket.emit("DEL_USER",{id:socket.id})
            console.log(socket.id + "delete user " + getUser(socket.id,UserStore))
            socket.emit("DEL_USER", { id: socket.id })
          
        })


})

// io.on('groupMessage', (message) => sc.SocketController(socket,io).groupMessage(message))
//io.on('broadcastMessage', (message) => io.emit.broadcast("BROADCAST_MESSAGE", message))
//io.on('logout', ({ id }) => UserReducer(UserStore, { type: "DEL_USER", payload: { id: id } }))
//io.on('connection', (socket) =>console.log("Connected",socket.id))//io.emit("ASSOCIATE_USER",socket.id))
//io.on('privateMessage', (message) => console.log("PRIVATE MESG", message))
//io.on("setUser", user => console.log(user.username + " conneced"))
server.listen(process.env.PORT, () => {
    log(`We are up listening on ${process.env.PORT}`)
})


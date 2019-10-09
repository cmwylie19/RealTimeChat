import React, { Fragment, useState, createContext, useContext } from 'react'
import openSocket from 'socket.io-client';
import { fetchAll, log } from '../libs';

let SocketContext = createContext();
var io;
export const setUser = (id, email) => io.emit({ type: "setUser", payload: { id, email } })
export const SocketProvider = SocketContext.Provider;
export const SocketContainer = (props) => {
    io = openSocket('http://localhost:3332')
    const [email, setEmail] = useState("")
    const [id, setID] = useState("")
    const [online, setOnline] = useState([]);
    const [msg, setMsg] = useState([]);
    const [socketID, setSocketID] = useState();
    const [currentMessage, setCurrentMessage] = useState({ to: "", from: "", content: "" });
    const [socketHandshake, setSocketHandshake] = useState();

    io.on('connection', async socket => {
        log('connected. ' + JSON.stringify(data))
        log('connected. ' + JSON.stringify(data))
        const { to, from, content } = data;
        io.on("SET_USER", id => alert(`new user with id of ${id}`))
        io.on("DEL_USER", id => alert('delete user with id of ' + id))
        setID(socket.id)
        let onlines = await fetchAll()
        setOnline([...onlines.data])

        io.on('newMessageServer', data => {
            log('Compare data: socket data. ' + JSON.stringify(data))
            const { to, from, content } = data;
            setMsg([...msg, { to, from, content }])
            log('Compare data: stored data. ' + { to, from, content })
        })

        io.on("userSignin", async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })


        io.on("userSignin", async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })

        io.on("userSignout", async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })

        io.on('disconnect', async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })
    })

    io.on("BROADCAST_MESSAGE", (message) => {
        setMsg([...msg, { from: message.from, content: message.payload }]);
    })

    io.on("PRIVATE_MESSAGE", (message) => {
        setMsg([...msg, { from: message.from, content: message.payload }]);
    })

    io.on("ASSOCIATE_USER", ({ id }) => {
        if (email !== undefined) {
            io.emit("setUser", { id: id, username: email })
        }
        setID(id)
    })
    return (
        <Fragment
            id={socketID}
            id={id}
            msg={msg}
            io={io}
            online={online}
            currentMessage={currentMessage}
            socketHandshake={socketHandshake}
            setUser={(email) => {
                setEmail(email)
                alert(email + "setUser");
                setU(email)
                io.emit("setUser", { payload= { username= email, id } })
            }}
            updateOnlines={online => setOnline([...online])}
            sendDM={(to, from, content) => {
                alert(`to it ${to} from ${from} ${content}`)
                io.emit('sendMessageClient', { to, from, content })
            }}
            setSocketHandshake={(handshake) => setSocketHandshake(handshake)}
            setCurrentMessage={curr => setCurrentMessage(curr)}
            sendMessage={(to, from, content) => {
                io.emit("privateMessage", { to, from, payload= content });
            }}
            setSocketID={id => setSocketID(id)} >
            {props.children}
        </Fragment>

    )
}

export const SocketConsumer = SocketContext.Consumer
export const useSocket = () => useContext(SocketContext)
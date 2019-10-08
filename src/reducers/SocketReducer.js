import React, { Fragment, useState, createContext } from 'react'
import openSocket from 'socket.io-client';
import { fetchAll, log } from '../libs';
import { useUser } from './UserReducer'
let SocketContext = createContext();

var io = openSocket('http://localhost:3332');

export const SocketProvider = (props) => {
    const {email,setEmail} = useUser()
    const [online, setOnline] = useState([]);
    const [msg, setMsg] = useState([]);
    const [socketID, setSocketID] = useState();
    const [currentMessage, setCurrentMessage] = useState({ to: "", from: "", content: "" });
    const [socketHandshake, setSocketHandshake] = useState();

    io.on('connection', async socket => {
        let onlines = await fetchAll()
        setOnline([...onlines.data])
        setCurrentMessage(onlines[0])

        alert("Tring to set user : "+email)
        log("Connection ",socket.id)
        email !== "" && socket.emit("setUser", {username:email});

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

       
        
        io.on("userSignout", async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })

        io.on('disconnect', async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })
    })

    io.on("PRIVATE_MESSAGE", (message) => {
        setMsg([...msg, { to: message.to, from: message.from, payload: message.content }]);
    })

    

    const sendMessage= (to, from, content) => {
        io.emit("setUser",{username:from});
        setEmail(from);
        io.emit("privateMessage", { to, from, content });
    }

    return (
        <Fragment>
            <SocketContext.Provider value={{
                id: socketID,
                msg,
                io,
                online,
                currentMessage,
                socketHandshake,
                updateOnlines: online => setOnline([...online]),
      
                setSocketHandshake: (handshake) => setSocketHandshake(handshake),
                setCurrentMessage: curr => setCurrentMessage(curr),
                sendMessage: (to, from, content) => sendMessage( to, from, content),
 
                setSocketID: id => setSocketID(id)

            }}>
                {props.children}
            </SocketContext.Provider>
        </Fragment>
    )
}

export const SocketConsumer = SocketContext.Consumer
import React, { Fragment, useState, createContext } from 'react'
import openSocket from 'socket.io-client';
import { fetchAll, log } from '../libs';
import { useUser } from './UserReducer'
let SocketContext = createContext();

var io = openSocket('http://localhost:3332');
let socket;
export const SocketProvider = (props) => {
    const {email,setEmail} = useUser()
    const [online, setOnline] = useState([]);
    const [msg, setMsg] = useState([]);
    const [socketID, setSocketID] = useState();
    const [currentMessage, setCurrentMessage] = useState({ to: "", from: "", payload: "" });
    const [socketHandshake, setSocketHandshake] = useState();
    const [ws,setWS]=useState()
    io.on('connection', async socket => {
        socket={...socket}
        let onlines = await fetchAll()
        setOnline([...onlines.data])
        setCurrentMessage(onlines[0])
        setSocketID(socket.id)
        setWS(socket)
        alert("Tring to set user : "+email)
        log("Connection ",socket.id)
        email !== "" && socket.emit("setUser", {username:email});

        io.on('newMessageServer', data => {
            log('Compare data: socket data. ' + JSON.stringify(data))
            const { to, from, payload } = data;
            setMsg([...msg, { to, from, payload }])
            log('Compare data: stored data. ' + { to, from, payload })
        })

        io.on("userSignin", async () => {
            let onlines = await fetchAll()
            setOnline([...onlines.data])
        })

        socket.on("ADD_USER", async ({to,from,payload}) => {
            // const {to,from,payload}=message;
            socket.to(socket.id).emit("addUser",{email})
            io.emit("privateMessage", { to, from, payload });
        })

        socket.on("PRIVATE_MESSAGE", ({to,from,payload}) => {
            log('\n\n'+'\n\n'+to+" "+from+" "+payload)
            setMsg([...msg, {timestamp:Date.now(), to: email, from:from, payload: payload }]);
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
        log('PRIVATE_MESSAGE\n\n'+JSON.stringify(message)+'\n\n')
        setMsg([...msg, {timestamp:Date.now(), to: message.to, from: message.from, payload: message.payload }]);
    })

    

    const sendMessage= (to, from, payload) => {
        log('sendMessage\n\n'+'\n\n'+to+" "+from+" "+payload)
        io.emit("addUser",{to,from,payload});
  
        setEmail(from);
        
    }

    return (
        <Fragment>
            <SocketContext.Provider value={{
                id: socketID,
                msg,
                io,
                online,
                email:email,
                currentMessage,
                socketHandshake,
                updateOnlines: online => setOnline([...online]),
      
                setSocketHandshake: (handshake) => setSocketHandshake(handshake),
                setCurrentMessage: curr => setCurrentMessage(curr),
                sendMessage: (to, from, payload) => sendMessage( to, from, payload),
 
                setSocketID: id => setSocketID(id)

            }}>
                {props.children}
            </SocketContext.Provider>
        </Fragment>
    )
}

export const SocketConsumer = SocketContext.Consumer
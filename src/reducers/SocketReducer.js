import React, { Fragment, useState, useContent, createContext, useReducer, useEffect } from 'react'
import openSocket from 'socket.io-client';
import { fetchAll } from '../libs';

// function sanitizeString(message) {
//     return message.replace(/(<([^>]+)>)/ig, '').substring(0, 35);
// }

// const log = msg => alert(JSON.stringify(msg, undefined, 2))
let SocketContext = createContext();

var io = openSocket('http://localhost:3332');

export const SocketProvider = (props) => {
    const [online,setOnline]=useState([]);
    const [msg, setMsg] = useState([]);
    const [socketID, setSocketID] = useState();
    const [currentMessage, setCurrentMessage] = useState({to:"",from:"",content:""});
    const [socketHandshake, setSocketHandshake] = useState();

    const {log } = console
     io.on('connection',(socket)=>{
       
         alert(Object.keys(socket))
    io.on("userSignin",async ()=>{
        alert('userSignIn')
        let onlines = await fetchAll()
        setOnline([...onlines.data])
    })
    io.on("newMessageServer",(message)=>{
        alert('MSG FROM THE SERVING TIOP  from server '+JSON.stringify(message))
        setMsg([...msg, {to:message.to,from:message.from,content:message.context}]);
    })
    
    io.on("userSignin",async ()=>{
        log("UserSignin")
        let onlines = await fetchAll()
        setOnline([...onlines.data])
    })
    io.on("userSignout",async ()=>{
        log("UserSignin")
        let onlines = await fetchAll()
        setOnline([...onlines.data])
    })
     
   //const sendMessage = message=>socket.emit("newClientMessage",message)
    socket.on('disconnect', () => {
        log(`websocket discnnected`);
    })
})

io.on("newMessageServer",(message)=>{
    alert('MSG FROM THE SERVING TIOP  from server '+JSON.stringify(message))
    setMsg([...msg, {to:message.to,from:message.from,content:message.content}]);
})

return (
    <Fragment>
        <SocketContext.Provider value={{
            id:socketID,
            msg,
            io,
            //socket,
            online,
           // sendMessage:(msg)=>sendMessage(msg),
          //  sendMessage,
            currentMessage,
            socketHandshake,
            updateOnlines:online=>setOnline([...online]),
            sendDM:(to,from,content)=>{
                alert(`to it ${to} from ${from} ${content}`)
                io.emit('sendMessageClient',{to,from,content})
            },
            setSocketHandshake: (handshake) => setSocketHandshake(handshake),
            setCurrentMessage: curr => setCurrentMessage(curr),
            sendMessage: (to,from,content)=>{
               
                io.emit("newMessageClient",{to,from,content});
            },
            setSocketID: id => setSocketID(id)

        }}>
            {props.children}
        </SocketContext.Provider>
    </Fragment>
)
}

export const SocketConsumer = SocketContext.Consumer
// let SocketProvider = SocketContext.Provider
// let SocketProvider = props => {

// // }
// let SocketConsumer = SocketContext.Consumer;


// export const SocketContainer = (props) => {

//     const [msg, setMsg] = useState();
//     const [socketID, setSocketID] = useState();
//     const [currentMessage, setCurrentMessage] = useState();
//     const [socketHandshake, setSocketHandshake] = useState();

//     var socket = io('http://localhost:3332');

//     socket.on('connect', io => {
//         log(io)

//         socket.on('newUserPrivate', creds => {
//             setSocketID(creds.id),
//                 setSocketHandshake(creds.handshake);

//             socket.emit("newUserCreds", {
//                 handshake: creds.handshake,
//                 name: props.name,
//                 id: creds.id
//             })
//         })

//         socket.on('messagePrivate', message => {
//             const { from, content } = message;
//             setMsg({ from, content });
//         })

//         socket.emit('messagePrivate', { to: currentMessage.to, from: socketID, content: currentMessage.content });

//         socket.on('disconnect', () => {
//             log(`websocket discnnected`);
//         })

//         return (
//             <Fragment>
//                 <SockerProvider value={{
//                     socketID,
//                     msg,
//                     currentMessage,
//                     socketHandshake,
//                     setSocketHandshake: (handshake) => setSocketHandshake(handshake),
//                     setCurrentMessage: curr => setCurrentMessage(curr),
//                     setMsg: mesg => setMsg(mesg),
//                     setSocketID: id => setSocketID(id)

//                 }}>
//                     {children}
//                 </SockerProvider>
//             </Fragment>
//         )
//     }


// //  class Chat {
// //     constructor(nick) {
// //         this.latency=0;
// //         this.nick = nick;
// //         this.socket = io('http://localhost:3332',{query: "nick=" + nick});
// //         this.commands = {};

// //         this.setupSocket();
// //         this.setupChat();
// //         this.setupEvents();
// //     }

// //     setupSocket() {
// //         this.socket.on('dong', () => {
// //             this.latency = Date.now() - this.startPingTime;
// //             this.addSystemLine('Ping: ' + this.latency + 'ms');
// //         });

// //         this.socket.on('connect_failed', () => {
// //             this.socket.close();
// //         });

// //         this.socket.on('disconnect', () => {
// //             this.socket.close();
// //         });

// //         this.socket.on('userDisconnect', (data) => {
// //             this.addSystemLine('<b>' + (data.nick.length < 1 ? 'Anon' : data.nick) + '</b> disconnected.');
// //         });

// //         this.socket.on('userJoin', (data) => {
// //             this.addSystemLine('<b>' + (data.nick.length < 1 ? 'Anon' : data.nick) + '</b> joined.');
// //         });

// //         this.socket.on('serverSendUserChat', (data) => {
// //             this.addChatLine(data.nick, data.message, false);
// //         });
// //     }

// //     setupChat() {
// //         this.registerCommand('ping', 'Check your latency.', () => {
// //             this.checkLatency();
// //         });

// //         this.registerCommand('help', 'Information about the chat commands.', () => {
// //             this.printHelp();
// //         });

// //         this.addSystemLine('Connected to the chat!');
// //         this.addSystemLine('Type <b>/help</b> for a list of commands.');
// //     }

// //     setupEvents() {
// //         this.chatInput.addEventListener('keypress', (key) => {
// //             key = key.which || key.keyCode;
// //             if (key === 13) {
// //                 this.sendChat(sanitizeString(this.chatInput.value));
// //                 this.chatInput.value = '';
// //             }
// //         });

// //         this.chatInput.addEventListener('keyup', (key) => {
// //             key = key.which || key.keyCode;
// //             if (key === 27) {
// //                 this.chatInput.value = '';
// //             }
// //         });
// //     }

// //     sendChat(text) {
// //         if (text) {
// //             if (text.indexOf('/') === 0) {
// //                 let args = text.substring(1).split(' ');

// //                 if (this.commands[args[0]]) {
// //                     this.commands[args[0]].callback(args.slice(1));
// //                 } else {
// //                     this.addSystemLine('Unrecognized Command: ' + text + ', type /help for more info.');
// //                 }

// //             } else {
// //                 this.socket.emit('userChat', {nick: this.nick, message: text});
// //                 this.addChatLine(this.nick, text, true);
// //             }
// //         }
// //     }

// //     addChatLine(name, message, me) {
// //         let newline = document.createElement('li');

// //         newline.className = (me) ? 'me' : 'friend';
// //         newline.innerHTML = '<b>' + ((name.length < 1) ? 'Anon' : name) + '</b>: ' + message;

// //         this.appendMessage(newline);
// //     }

// //     addSystemLine(message) {
// //         let newline = document.createElement('li');

// //         newline.className = 'system';
// //         newline.innerHTML = message;

// //         this.appendMessage(newline);
// //     }

// //     appendMessage(node) {
// //         if (this.chatList.childNodes.length > 10) {
// //             this.chatList.removeChild(this.chatList.childNodes[0]);
// //         }
// //         this.chatList.appendChild(node);
// //     };

// //     registerCommand(name, description, callback) {
// //         this.commands[name] = {
// //             description: description,
// //             callback: callback
// //         };
// //     };

// //     printHelp() {
// //         for (let cmd in this.commands) {
// //             if (this.commands.hasOwnProperty(cmd)) {
// //                 this.addSystemLine('/' + cmd + ': ' + this.commands[cmd].description);
// //             }
// //         }
// //     };

// //     checkLatency() {
// //         this.startPingTime = Date.now();
// //         this.socket.emit('ding');
// //     }
// // }

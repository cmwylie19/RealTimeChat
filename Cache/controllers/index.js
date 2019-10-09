export let UserStore = {}

export var UserReducer = (state = { ...UserStore }, action) => {
 switch (action.type) {
   case "SET_USER":
    return { ...state, [action.payload.id]:action.payload.username}
   case "DEL_USER":
     return Object.entries(state).filter((value,index,acc)=>value[0] !== action.payload.id)
    case "ALL_USERS":
     return { ...state }
     default:
      return state
    }
}
function findKey(state, id) {
 let key = Object.entries(state).map((key, index, acc) => {
  if (key[0] == id) {
    return state[key[0]]
   }
   })
   return key
  }
UserStore = UserReducer(UserStore, { type: "DEL_USER", payload: { id: '2' } })
UserStore = UserReducer(UserStore, { type: "SET_USER", payload: { id: 2, username: "Mitch" } })
UserStore= UserReducer(UserStore, {type:"ALL_USERS"})

export const SocketController = (socket, io) => {
    const getUser = (id, UserStore) => {
        for (let user of Object.entries(UserStore)) {
            if (user[0] == id) {
                console.log(user[1])
                return user[1]
            }
        }
    }
    const removeUser = (id) => UserReducer(UserStore, { type: "DEL_USER", payload: { id: '2' } })
    const associateUser = (id) => io.emit("ASSOCIATE_USER", id)
    const setUser = (user) => UserReducer(UserStore, { type: "SET_USER", payload: { id: user.id, username: user.username } })
    
    const privateMessage = message => io.to(getUser(message.to)).emit("PRIVATE_MESSAGE", { from: message.from, payload: message.payload })
    const groupMessage = message => io.to(message.to).emit("GROUP_MESSAGE", {from: message.from, payload: message.payload });
    const broadcastMessage = message => io.emit("BROADCAST_MESSAGE", {from: message.from, payload: message.payload });
    

    // setUser = (id, username) => {
    //     let store = { ...UserStore };
    //     store[id] = username;
    //     UserStore = { ...store };
    // }

    

    // removeUser = (id) => {
    //     let tempStore = { ...UserStore };
    //     for (let user of Object.entries(UserStore)) {
    //         if (user[index] === id) {
    //             delete tempStore[1];
    //             UserStore = { ...tempStore };
    //         }
    //     }
    // }
}
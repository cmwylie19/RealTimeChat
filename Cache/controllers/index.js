export let UserStore = {}
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
const tempUser = (state, id) => {
    Object.entries(state).map((key, index, acc) => {
        if (key[0] === id) {
            return state[key[0]]

        }
    })
}
UserStore = UserReducer(UserStore, { type: "REMOVE_USER", payload: { id: '2' } })
UserStore = UserReducer(UserStore, { type: "ADD_USER", payload: { id: 2, username: "Mitch" } })
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
import React, { createContext, useContext} from 'react'

var initalState = {
    first: "",
    last: "",
    email: "",
    token: "",
    contacts: [],
    messages:[]
}

const UserReducer = (state={}, action) => {
    switch(action.type) {
        case "SET_FIRST":
            return {...state, first:action.payload}
        case "SET_LAST":
            return {...state, last:action.payload}
        case "SET_EMAIL":
                return {...state, email:action.payload}
        case "SET_TOKEN":
                return {...state, token:action.payload}
        default: 
            return state
    }
}

const UserContext = createContext();
export const UserProvider = ({children}) => (
    <UserContext.Provider value={{
        theme: initialState,
        changeTheme: theme => {
            initialState = {...theme} 
        }
    }}>
        {children}
    </UserContext.Provider>
)

export const UserConsumer = UserContext.Consumer;

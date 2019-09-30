import React, { useReducer, createContext, useContext } from 'react'

var initialState = {
    first: "",
    last: "",
    email: "",
    token: "",
    remember: false,
    contacts: [],
    messages: [],

}

const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_FIRST":
            return { ...state, first: action.payload }
        case "SET_LAST":
            return { ...state, last: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_REMEMBER":
            return { ...state, remember: action.payload }
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        case "SET_AVATAR":
            return { ...state, avatar: action.payload }
        default:
            return state
    }
}

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    return <UserContext.Provider value={{
        theme: initialState,
        changeTheme: theme => {
            initialState = { ...theme }
        }
    }}>
        {children}
    </UserContext.Provider>
}

export const UserConsumer = UserContext.Consumer;
export const useUser = () => useContext(UserContext);

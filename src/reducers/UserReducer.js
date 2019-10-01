import React, { useReducer, createContext, useContext } from 'react'
import { UserLogo } from '../assets/images' 
var initialState = {
    first: "",
    last: "",
    email: "",
    token: "",
    remember: false,
    avatar: UserLogo,
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
        user: state,
        avatar: state.avatar,
        first: state.first,
        last: state.last,
        email: state.email,
        password: state.password,
        remember: state.remember,
        setFirst: first=> dispatch({type:"SET_FIRST", payload: first}),
        setLast: last => dispatch({ type: "SET_LAST", payload: last}),
        setRemember: ()=> dispatch({type:"SET_REMEMBER", payload: !state.remember}),
        setEmail: email => dispatch({ type: "SET_EMAIL", payload: email}),
        setPassword: password => dispatch({ type: "SET_PASSWORD", payload: password}),
        setToken: token=> dispatch({type:"SET_TOKEN", payload: token}),
        setAvatar: avatar => dispatch({ type: "SET_AVATAR", payload: avatar})
    }}>
        {children}
    </UserContext.Provider>
}

export const UserConsumer = UserContext.Consumer;
export const useUser = () => useContext(UserContext);

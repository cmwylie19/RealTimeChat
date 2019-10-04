import React, { useReducer, createContext, useContext } from 'react'
import { UserLogo } from '../assets/images' 
var initialState = {
    given_name: "",
    family_name: "",
    email: "",
    token: "",
    remember: false,
    avatar: UserLogo,
    contacts: [],
    messages: [],

}

const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_GIVEN_NAME":
            return { ...state, given_name: action.payload }
        case "SET_FAMILY_NAME":
            return { ...state, family_name: action.payload }
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
        given_name: state.given_name,
        family_name: state.family_name,
        email: state.email,
        password: state.password,
        remember: state.remember,
        setFirst: given_name=> dispatch({type:"SET_GIVEN_NAME", payload: given_name}),
        setLast: family_name => dispatch({ type: "SET_FAMILY_NAME", payload: family_name}),
        setRemember: remember=> dispatch({type:"SET_REMEMBER", payload: remember}),
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

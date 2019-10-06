import React, { useReducer, createContext, useContext } from 'react'
import { UserLogo } from '../assets/images'


var initialState = {
    given_name: "",
    family_name: "",
    preferred_username: "",
    name: "",
    refreshToken: "",
    idToken: "",
    token: "",
    accountRoles: [],
    realmAccessRoles: [],
    email: "",
    remember: false,
    avatar: UserLogo,
    contacts: [],
    messages: [],
    OnlineUsers: null,
}

const UserReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            console.log(`USER_LOGIN\n\n+${JSON.stringify(action.payload)}`)
            return {
                ...state,
                given_name: action.payload.given_name,
                family_name: action.payload.family_name,
                preferred_username: action.payload.preferred_username,
                name: action.payload.name,
                refreshToken: action.payload.refreshToken,
                idToken: action.payload.idToken,
                token: action.payload.token,
                accountRoles: action.payload.accountRoles,
                realmAccessRoles: action.payload.realmAccessRoles,
                email: action.payload.email
            }
        case "USER_LOGOUT":
            return {
                ...state,
                given_name: null,
                family_name: null,
                preferred_username: null,
                name: null,
                refreshToken: null,
                idToken: null,
                token: null,
                accountRoles: null,
                realmAccessRoles: null,
                email: null
            }
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
        case "SET_ONLINE_USERS":
            console.log(`OnlineUsers reducer ${JSON.stringify(action.payload)}`)
            return { ...state, OnlineUsers: action.payload }
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
        name: state.name,
        userLogin: (given_name,
            family_name,
            preferred_username,
            name,
            refreshToken,
            idToken,
            token,
            accountRoles,
            realmAccessRoles,
            email) => dispatch({
                type: "USER_LOGIN",
                payload: {
                    given_name,
                    family_name,
                    preferred_username,
                    name,
                    refreshToken,
                    idToken,
                    token,
                    accountRoles,
                    realmAccessRoles,
                    email
                }
            }),
        setOnlineUsers: (users) => dispatch({ type: "SET_ONLINE_USERS", payload: users }),
        userLogout: () => dispatch({ type: "USER_LOGOUT" }),
        setFirst: given_name => dispatch({ type: "SET_GIVEN_NAME", payload: given_name }),
        setLast: family_name => dispatch({ type: "SET_FAMILY_NAME", payload: family_name }),
        setRemember: remember => dispatch({ type: "SET_REMEMBER", payload: remember }),
        setEmail: email => dispatch({ type: "SET_EMAIL", payload: email }),
        setPassword: password => dispatch({ type: "SET_PASSWORD", payload: password }),
        setToken: token => dispatch({ type: "SET_TOKEN", payload: token }),
        setAvatar: avatar => dispatch({ type: "SET_AVATAR", payload: avatar })
    }}>
        {children}
    </UserContext.Provider>
}

export const UserConsumer = UserContext.Consumer;
export const useUser = () => useContext(UserContext);

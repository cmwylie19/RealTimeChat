import React, { createContext, useContext} from 'react'

var initalState = {
    backgroundColor: "white",
    textColor: 'black'
}

const ThemeReducer = (state={}, action) => {
    switch(action.type) {
        case "SET_THEME":
            return {...state}
        default: 
            return state
    }
}

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => (
    <ThemeContext.Provider value={{
        theme: initialState,
        changeTheme: theme => {
            initialState = {...theme} 
        }
    }}>
        {children}
    </ThemeContext.Provider>
)

export const ThemeConsumer = ThemeContext.Consumer;

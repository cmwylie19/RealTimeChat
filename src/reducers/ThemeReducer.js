import React, { useReducer, createContext, useContext } from 'react'
import { redTheme, defaultTheme, greenTheme } from '../assets/themes'


const ThemeReducer = (state = {}, action) => {
    switch (action.type) {
        case "CUSTOM_BG_COLOR":
            return {...state, backgroundColor: action.payload}
        case "CUSTOM_THEME":
                return {...action.payload}
        case "RED_THEME":
            return {...redTheme}
        case "GREEN_THEME":
            return { ...greenTheme }
        case "DEFAULT_THEME":
            return {...defaultTheme}
        default:
            return state
    }
}



const ThemeContext = createContext();
export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(ThemeReducer, defaultTheme)
    return (
        <ThemeContext.Provider
            value={{
                theme: state,
                backgroundColor: state.backgroundColor,
                color: state.color,
                setCustomTheme: theme => dispatch({type:"CUSTOM_THEME", payload: theme}),
                setCustomBackground: bgColor => dispatch({type:"CUSTOM_BG_COLOR", payload: bgColor}),
                setRedTheme: ()=>dispatch({type: "RED_THEME"}),
                setGreenTheme: ()=>dispatch({type:"GREEN_THEME"}),
                setDefaultTheme: ()=>dispatch({type:"DEFAULT_THEME"})
            }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const ThemeConsumer = ThemeContext.Consumer;
export const useTheme = () => useContext(ThemeContext)

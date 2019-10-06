import React, { useReducer, createContext, useContext } from 'react'
import { orangeTheme, blueTheme, greenTheme } from '../assets/themes'

const initialState = {
    primary: blueTheme.primary,
    secondary: blueTheme.secondary
}

const ThemeReducer = (state = {}, action) => {
    switch (action.type) {
        case "CUSTOM_BG_COLOR":
            return {
                ...state,
                backgroundColor: action.payload
            }
        case "CUSTOM_THEME":
            return {
                ...action.payload
            }
        case "ORANGE_THEME":
            return {
                ...state,
                primary: orangeTheme.primary,
                secondary: orangeTheme.secondary
            }
        case "GREEN_THEME":
            return {
                ...state,
                primary: greenTheme.primary,
                secondary: greenTheme.secondary
            }
        case "BLUE_THEME":
            return {
                ...state,
                primary: blueTheme.primary,
                secondary: blueTheme.secondary
            }
        default:
            return state
    }
}

const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(ThemeReducer, initialState)
    return (
        <ThemeContext.Provider
            value={{
                theme: state,
                secondary: state.secondary,
                primary: state.primary,
                setCustomTheme: theme => dispatch({ type: "CUSTOM_THEME", payload: theme }),
                setCustomBackground: bgColor => dispatch({ type: "CUSTOM_BG_COLOR", payload: bgColor }),
                setOrangeTheme: () => dispatch({ type: "ORANGE_THEME" }),
                setGreenTheme: () => dispatch({ type: "GREEN_THEME" }),
                setBlueTheme: () => dispatch({ type: "BLUE_THEME" })
            }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const ThemeConsumer = ThemeContext.Consumer;
export const useTheme = () => useContext(ThemeContext)

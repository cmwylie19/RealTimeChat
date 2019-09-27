import React, { useContext, createContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => (
    <BrowserRouter>
        <Route>
        {(routeProps)=> (
            <RouterContext.Provider value={routeProps}>
                {children}
            </RouterContext.Provider>
        )}
        </Route>
    </BrowserRouter>
)

export const useRouter = () => useContext(RouterContext)
export const useHistory = () => {
    const { history }  = useRouter();
    const routerStuff = useRouter();
    console.log(`Router stuff is ${console.log(JSON.stringify(routerStuff))}`);
    return history;
}
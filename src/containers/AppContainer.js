import React from 'react'
import { RouterProvider, SocketProvider, ThemeProvider, UserProvider } from '../reducers'
import { Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'


const AppContainer = (props) => (
    <RouterProvider>
        <ThemeProvider>
            <UserProvider>
                <SocketProvider>
                    <Route config={props} component={DashboardContainer} exact path="/" />
                </SocketProvider>
            </UserProvider>
        </ThemeProvider>
    </RouterProvider>
)


export default AppContainer;
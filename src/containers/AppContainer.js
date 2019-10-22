import React from 'react'
import { RouterProvider, SocketProvider, ThemeProvider, UserProvider } from '../reducers'
import { Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'


const AppContainer = () => (
    <RouterProvider>
        <ThemeProvider>
            <UserProvider>
                <SocketProvider>
                    <Route component={DashboardContainer} exact path="/" />
                </SocketProvider>
            </UserProvider>
        </ThemeProvider>
    </RouterProvider>
)


export default AppContainer;
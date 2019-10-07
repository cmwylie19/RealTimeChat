import React from 'react'
import { RouterProvider, SocketProvider, ThemeProvider, UserProvider } from '../reducers'
import { Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'
import NavContainer from './NavContainer'
import OldNavContainer from './OldNavContainer'

const AppContainer = () => (
    <RouterProvider>
        <ThemeProvider>
            <UserProvider>
                <SocketProvider>
                    <Route component={DashboardContainer} exact path="/" />
                    <Route component={OldNavContainer} exact path="/prev" />
                    <Route component={NavContainer} exact path="/nav" />
                </SocketProvider>
            </UserProvider>
        </ThemeProvider>
    </RouterProvider>
)


export default AppContainer;
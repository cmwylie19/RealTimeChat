import React, { Fragment } from 'react'
// import { RouterProvider, UserReducer } from '../reducers'
import { RouterProvider, ThemeProvider, UserProvider } from '../reducers'
import { Route } from 'react-router-dom'
import LandingContainer from './LandingContainer'
import DashboardContainer from './DashboardContainer'
import Secured from './Secured'

export const AppContainer = () =>
    <RouterProvider>
        <ThemeProvider>
            <UserProvider>
                {/* <Route component={LandingContainer} path="/" exact /> */}
                <Route component={DashboardContainer} path="/" />
                {/* <Route component={Secured} path="/dashboard" /> */}
            </UserProvider>
        </ThemeProvider>
    </RouterProvider>


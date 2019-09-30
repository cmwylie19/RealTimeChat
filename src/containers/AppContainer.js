import React, { Fragment } from 'react'
// import { RouterProvider, UserReducer } from '../reducers'
import { RouterProvider, ThemeProvider, UserProvider } from '../reducers'
import { Route } from 'react-router-dom'

import LandingContainer from './LandingContainer'
import DashboardContainer from './DashboardContainer'


export const AppContainer = () => (
        <RouterProvider>
            <ThemeProvider>
            <UserProvider>
                <Route component={LandingContainer} path="/"  exact />
                <Route component={DashboardContainer} path="/home/dashboard" />
            </UserProvider>
            </ThemeProvider>
        </RouterProvider>
)

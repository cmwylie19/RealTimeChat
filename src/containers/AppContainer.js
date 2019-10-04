import React from 'react'
import { RouterProvider, ThemeProvider, UserProvider } from '../reducers'
import { Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'

export const AppContainer = () =>
    <RouterProvider>
        <ThemeProvider>
            <UserProvider>
                <Route component={DashboardContainer} path="/" />
            </UserProvider>
        </ThemeProvider>
    </RouterProvider>


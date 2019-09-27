import React, { Fragment } from 'react'
import { RouterProvider } from '../reducers'
import { Route } from 'react-router-dom'
import LandingContainer from './LandingContainer'
import DashboardContainer from './DashboardContainer'
export const AppContainer = () => (
        <RouterProvider>
            <Route component={LandingContainer} path="/"  exact />
            <Route component={DashboardContainer} path="/home/dashboard" />
        </RouterProvider>
)

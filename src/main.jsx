import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle , ColorProvider ,BoughtProvider,UserProvider } from './export'
import { Routes } from "./routes/Routes"
import {RouterProvider  } from 'react-router-dom'
import {MyProviders } from "./MyProviders"

const router = Routes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProviders>
      <RouterProvider router = { router } />
    </MyProviders>
  </React.StrictMode>,
)

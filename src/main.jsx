import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import AuthProvider from './AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const client=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={client} >
  <AuthProvider>
  <RouterProvider router={Router} />
  </AuthProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)

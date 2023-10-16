import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  
  {
    path:'/profile',
    element: <Profile/>
  
  },

  {
    path: '/settings',
    element: <Settings/>

  }
  ]
  )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} >
    
    <App />
    </RouterProvider>
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//Styles
import './main.scss'

//Components
import Home from './components/Home'
import ChatPage from './components/Chat'  



//Router Browser
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/chat',
    element:<ChatPage />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

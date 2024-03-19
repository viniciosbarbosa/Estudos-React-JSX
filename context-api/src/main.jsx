import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter , RouterProvider , Navigate, Router} from "react-router-dom"
import { ErrorPage } from './routes/ErrorPage.jsx'
import { Home } from './routes/Home.jsx'
import { About } from './routes/About.jsx'
import { Products } from './routes/Products.jsx'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {path:"" , element: <Home/>},
    {path:"/about" , element:<About/>},
    {path:"/products" , element:<Products/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleColorContextProvider>
    <CounterContextProvider>
      <RouterProvider router={router}/>
      </CounterContextProvider>
    </TitleColorContextProvider>
  </React.StrictMode>,
)
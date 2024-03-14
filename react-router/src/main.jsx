import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//pages

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import AboutDetails from './routes/AboutDetails.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

// apos npm i react-router-dom - 1
import {createBrowserRouter,RouterProvider ,Navigate}from "react-router-dom"




const router = createBrowserRouter([
  {
    path:"/" , 
    element:<App/> ,
    errorElement:<ErrorPage/>, //pagina erro e estrutura basica - 3
    children:[
    {path:"" , element:<Home/>},
    {path:"/about" , element:<About/>},

    //routa dinamicas
    {path:"/about-details/:id" , element:<AboutDetails/>},

    //redirect
    {path:"old" , element:<Navigate to={"/about"} />}
          
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)

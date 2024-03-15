import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar'

import Footer from './components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>

    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App

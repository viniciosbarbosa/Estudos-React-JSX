import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//ele faz o roteamento - 2
import { Outlet } from 'react-router-dom'

//navegacao - 4 
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>App</h1>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App

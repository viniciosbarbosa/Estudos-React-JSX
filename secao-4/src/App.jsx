import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Titulo from './components/Titulo'



function App() {
  const [count, setCount] = useState(0)

  const name  = useState("vinicius")

  const n = 15

  const redTitle = true

  return (
   <div className='App'>
    <h1>React com css</h1>
    <MyComponent/>
    <p>paragrafo App.jsx</p>
    <p className="mycomponent-paragrafo">teste tbm e my component</p>
    <p style={{color: "silver" , padding:"25px" , borderTop:"12px solid pink"}}>css inline</p>


    <p style={n < 10 ? ({color:"purple"}): ({color:"gray"}) }>Css Dinamico</p>

    <span style={name == "vinicius" ? ({color: "red"}): ({color:'blue'})} >{name}</span>

    <h2 className={!redTitle ? ("red-title") : ("title")}>este titulo vai ter class dinamica</h2>

    <Titulo/>

    <p className='my_title'>teste</p>
   </div>
  )
}

export default App

import { useState } from 'react'


import PrimeiroComponent from './components/PrimeiroComponent'
import TemplateExpressions from './components/TemplateExpressions'

import './App.css'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h1>Fundamentos React</h1>
      <PrimeiroComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>

      <Challenge/>
    </>
  )
}

export default App

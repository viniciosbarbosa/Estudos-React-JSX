import React, { useState } from 'react'

function Conditional() {
  const [x] = useState(true)

  const [name] = useState("joao")

  const [userState] = useState(false)

  const logado = () =>{
    return(
      <div>
        <p>voce esta logado </p>
      </div>
    )
  }

  const naoLogado = () =>{
    return(
      <div>
        <p>voce nao esta logado </p>
      </div>
    )
  }

  return (
    <div>
      <h1>
        isso vai ser exibido
        
      </h1>

      {x && <p>teste valor e verdadeiro</p>}
      {!x && <p>teste valor nao e verdadeiro</p>}

   
    {name == "joao" ? (<div>joao</div>) : (<div>nao e joao</div>)}

    {userState === true ? (logado()) : (naoLogado()) }
    </div>
  )
}

export default Conditional
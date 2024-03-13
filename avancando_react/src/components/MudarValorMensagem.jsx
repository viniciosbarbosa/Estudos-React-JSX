import React from 'react'

const MudarValorMensagem = ({handleMessage}) => {

    const mensagens = ["oi" , "ola" ,  "opa"]

  return (

    <div>
        <button onClick={() => handleMessage(mensagens[0])}>1</button>
        <button onClick={() => handleMessage(mensagens[1])}>2</button>
        <button onClick={() => handleMessage(mensagens[2])}>3</button>
    </div>
  )
}

export default MudarValorMensagem
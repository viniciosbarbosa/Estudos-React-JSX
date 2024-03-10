import React from 'react'
import { useState } from 'react'

const Data = () => {
    const [dadosForm , setDadosForm] = useState([
        {id:1 , nome:"Vinicius" , email:"natalia@gmail.com" , bio:"lorem" , senha:"teste123"},
        {id:2 , nome:"Natalia" , email:"natalia@gmail.com" , bio:"texto teste teste teste" , senha:"teste123"},
        {id:3 , nome:"Cintia" , email:"cintia@gmail.com" , bio:"super teste" , senha:"teste123"}
    ])

  return (
    <div>
        {dadosForm}
    </div>
  )
}

export default Data
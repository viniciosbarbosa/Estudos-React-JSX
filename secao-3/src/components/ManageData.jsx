import React, { useState } from 'react'



const ManageData = () => {
    let someData = 10;
    console.log(someData)

   

    const [number , setNumber] = useState(null) 
    const [numberAtt, setAtt] = useState(null) 

  
    

    console.log(number)

    const exibirNumero = () =>{

        setNumber(number + 10 )
        setAtt(numberAtt + 1)   
    }

  return (
    <div>
        {/* <div>
        <p>Valor :  {someData}</p>
        <button onClick={ () => (someData + 1)}>Clique</button>
        </div> */}

        <div>
        <p>Valor :  {number}</p>
        <button onClick={ () => exibirNumero()}>Clique</button>

        {number !== null &&(
            <div>
                <p>Seu Valor foi atualizado {numberAtt} vezes</p>
            </div>
        )}

        </div>
       
    </div>
   
  ) 
}

export default ManageData
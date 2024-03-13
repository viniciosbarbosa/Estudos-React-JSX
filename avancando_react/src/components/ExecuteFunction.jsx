import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
            <button onClick={myFunction}>Clique Aqui para Funcao de outro component</button>
    </div>

    
  )
}

export default ExecuteFunction
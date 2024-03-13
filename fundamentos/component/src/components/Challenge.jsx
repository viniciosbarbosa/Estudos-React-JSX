import { useState } from "react"

const Challenge = () =>{

    let valor_1 = 1
    let valor_2 = 2

    const [resultado , setResultado] = useState(null)

    const somaValores = () =>{
        let totalValor = valor_1+valor_2
        setResultado(totalValor)
    }

    return (
        <div>   
            <p>funciona</p>

            <p>
                valor {valor_1} , valor {valor_2} 
            </p>

            <button onClick={() => console.log(valor_1+valor_2)}>
                Codigo Inline
            </button>

            <button onClick={somaValores}>
                Codigo funcao
            </button>

           

            {resultado !== null && (
        <div>
          O Valor total é {resultado}
        </div>
      )}

          

        </div>

        
    )
}

export default Challenge


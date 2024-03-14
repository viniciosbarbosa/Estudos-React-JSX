import React from 'react'

//pega o param da rota -1
import { useParams , useNavigate } from 'react-router-dom'


const AboutDetails = () => {
    //precisa ter o mesmo nome que foi set ex : page/dado
    // no numero de const o nome deve ser dado
    const {id} = useParams()

    const navigate = useNavigate()

    const handleAboutDetails = () =>{
        console.log("enviado");
        return navigate("/")
    }
  return (
    <div>
        AboutDetails
        <p>Exibindo parametro da rota <br/>
                meu params é {id}
        </p>

        <button onClick={handleAboutDetails}>Voltar home</button>
    </div>
  )
}

export default AboutDetails
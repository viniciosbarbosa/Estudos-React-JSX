import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Asuka from './assets/asuka.webp'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import Conditional from './components/Conditional'
import ShowUserName from './components/ShowUserName'
import DetalhesCarro from './components/DetalhesCarro'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Mensagem from './components/Mensagem'
import MudarValorMensagem from './components/MudarValorMensagem'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  const name = "vinicius"

  const [nameUse] =  useState("russo")

  const [carInfo , setCarInfo] = useState([
    {id:1 , marca: "Fiat" , km:1000 , cor:"azul" , newCar:false},
    {id:2 , marca: "GM" , km:0 , cor:"azul" , newCar:true},
    {id:3 , marca: "Jeep" , km:20 , cor:"azul" , newCar:false},
    {id:4 , marca: "Honda" , km:20 , cor:"azul" , newCar:true}
  ])

  const [pessoas , setPessoas] = useState([
    {id:1 , nome:"Paulo" , idade:18},
    {id:2 , nome:"Paula" , idade:15},
    {id:3 , nome:"Joelma" , idade:29},
  ])

  const deleteCurrentCar = (idCar) => {
    setCarInfo((deletedCars) =>{
      return deletedCars.filter((deletedCarsCurrent) => deletedCarsCurrent.id !== idCar)
      
    })
  }

  const soldCurrentCar = (idCar) =>{
    {deleteCurrentCar(idCar)}
    alert("Parabens Vc comprou esse carro")
  }

  const deleteCurrentUser = (idUsuario) => {
    setUsers((oldUsers) => {
      return oldUsers.filter((userDelato) => userDelato.id !== idUsuario);
    });
  };

  const functionAmongComponent = () =>{
      alert("Funcao entre componentes feita sucesso")
  }

  const [message , setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>
      <h1>Secao 3</h1>
      <div>
        <img src="/rei.jpeg" width="130px" height="auto"  alt="rei"  />
      </div>

      <div>
          <img src={Asuka} width="130px" height="auto" alt="Asuka" />
      </div>

      

      <ManageData/>
      <ListRender/>

      <Conditional/>

      <ShowUserName name={nameUse} />

      {carInfo.map((cars) => (
        <div key={cars.id}>
          <DetalhesCarro marca={cars.marca}  km={cars.km}  cor={cars.cor}  newCar={cars.newCar} />

          
          <button onClick={() => soldCurrentCar(cars.id)}>Comprar Carro</button>
          <button onClick={() => deleteCurrentCar(cars.id)}>Delete o carro</button>
        </div>
      ))}
    

    <Fragment/>
    {/* <Container>
        <p>teste</p>
    </Container> */}

    <ExecuteFunction myFunction={functionAmongComponent} />

    <Mensagem msg={message} />

    <MudarValorMensagem handleMessage={handleMessage}/>


    {pessoas.map((people)=>(
        <div key={people.id}>
          <UserDetails nome={people.nome} idade={people.idade} />
        </div>
    ))}
    
    </div>
  )
}

export default App

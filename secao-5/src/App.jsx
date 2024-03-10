import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'
import InfoForm from './components/InfoForm'
import TableUser from './components/TableUser'

function App() {
  const [dadosForm, setDadosForm] = useState()
  const [tipoRole, setTipoRole] = useState()
  const [dadosTable, setDadosTable] = useState([])

  const consumirDadosApiForm = (dadosApi) => {
    setDadosForm(dadosApi)
  }

  /* rafc -- novo padrao */
  
  
  const consumirDadosApiTipoRole = (tipoRole) => {
    setTipoRole(tipoRole)
  }

  const consumirDadosTabela = (dadosTabela) => {
    setDadosTable(dadosTabela);
  }

  return (
    <div>
      <h2>Form</h2>
      <InfoForm
        consumirDadosApiForm={consumirDadosApiForm}
        consumirDadosApiTipoRole={consumirDadosApiTipoRole}
        pushDadosTabela={consumirDadosTabela}
      />
      {dadosForm && (
        <>
        <MyForm
      user={{
        name: dadosForm.nome,
        email: dadosForm.email,
        bio: dadosForm.bio,
        role: dadosForm.role,
        senha: '',
        confirmarSenha: ''
      }}

    roleData={tipoRole}
    pushDadosTabela={consumirDadosTabela}
/>

          <TableUser userTable={dadosTable} />
        </>
      )}
    </div>
  )
}

export default App

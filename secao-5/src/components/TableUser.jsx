import React from 'react'
import { useState } from 'react'

const TableUser = ({userTable}) => {
    const [usuariosTabela, setUsuarioTabela]  = useState(userTable ? userTable : [])

    

  return (
    <div>
    <p>teste</p>
    <table>
        <tbody>
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Função</th>
                <th>Ações</th>
            </tr>
            {usuariosTabela.map((users) => (
                <tr key={users.id}>
                    <td>{users.nome}</td>
                    <td>{users.email}</td>
                    <td>{users.role}</td>
                    <td><button>Excluir Usuário</button></td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default TableUser
import React, { useState } from 'react'

function ListRender() {
    const [list] = useState(["vinicius" , "jose" , "jose" , "ran"])

    const [users , setUsers] = useState([
        {id:1 , nome:"ale" },
        {id:2 , nome:"cintia"},
        {id:3 , nome:"larrisa"},
        {id:4 , nome:"ana"},
    ])

    const [usersData] = useState([
        { nome: "Vinicius", id: 13123123, endereco: { rua: "123" } },
        { nome: "Rafael", id: 12312342, endereco: { rua: "sei la" } },
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 5)

        // setUsers((prevUsers)=>{
        //     return prevUsers.filter((user)=> randomNumber !== user.id)
        // })
        console.log(randomNumber)

        setUsers((oldUsers => {
            return oldUsers.filter((users) => randomNumber !== users.id)
        })) 
    }

    // const deleteCurrentUser = (idUsuario) => {
    //     setUsers((oldUsers) => {
    //         return oldUsers.filter((users) => users.id !== idUsuario);
    //     });
    // };

    const deleteCurrentUser = (idUsuario) => {
        setUsers((oldUsers) => {
          return oldUsers.filter((userDelato) => userDelato.id !== idUsuario);
        });
      };

    

  
    let dadosUser = []
    let dadosUserEndereco = []
    const filter = () => {
        usersData.forEach((item) => {
            // console.log(item.nome)
            dadosUser.push(item.endereco.rua); // Alterei para extrair diretamente a rua do endereço
    
            // Se você quiser adicionar todos os endereços em um array, pode fazer assim:
            dadosUserEndereco.push(item.endereco);
        });
    
        console.log(dadosUserEndereco);
        // console.log(dadosUser);
    };



  return (
    <div>
        {/* <ul>
        {filter()}

            {list.map((item , i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) =>(
               <li key={user.id}>{user.nome}</li>
            ))}
        </ul>

        <button onClick={deleteRandom} >Delete random user</button> */}

        <ul className='lista' >
            {users.map((user) =>(
                <div key={user.id}>
                <li>{user.nome}</li>
                <button onClick={() => deleteCurrentUser(user.id)}>Delete o usuário</button>
              </div>


            ))}
        </ul>



        <ul>
            {dadosUserEndereco.map((item , i) =>(
                <li key={i}>{item.rua}</li>
            ))}
        </ul>

       

     
    </div>
  )
}

export default ListRender
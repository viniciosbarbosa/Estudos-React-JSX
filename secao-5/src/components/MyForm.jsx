import React from 'react'
 import '../components/MyForm.css'
import { useState } from 'react'

const MyForm = ({user , roleData , pushDadosTabela }) => {
    const [name , setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio , setBio] = useState(user? user.bio : "")
    const [role , setRole] = useState(user? user.role : "")
    const [senha , setSenha] = useState(user ? user.senha : "")
    const [confirmaSenha, setConfirmaSenha] = useState(user ? user.confirmarSenha : "")


    const handleName = (e) =>{
        setName(e.target.value)
    }

    

    const handleSubmit = (event) =>{
        event.preventDefault()
        
    
        
        if(senha.length < 8){
            alert("senha deve ter no minimo 8 digitos")
        }
        else{
            let id = Math.floor(Math.random() * 10) + 1;
            let params = {
                id: id,
                nome:name,
                email:email,
                bio:bio,
                role:role,
                senha:senha
            }
            

            console.log(params)



            pushDadosTabela([params]); 

            setName('');
            setEmail('');
            setBio('');
            setSenha('');
            setConfirmaSenha('');
           
        }
        
        
    }

    const validacaoForm = () => {
        if( senha == undefined || senha == "" || confirmaSenha == undefined || confirmaSenha !== senha){
       
            return true
        }else if(bio.length < 1){
            return true
        }else{
            return false
        }
       
    }

    // console.log(name)
    // console.log(email)
    // console.log(senha  , "senha")
    // console.log(confirmaSenha)


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
            </div>

           <label>
                <span>E-mail
                    <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </span>
           </label>

            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder='Digite aqui sua mensagem' onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
            </label>

            <label>
                <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                    <option valeu="" disabled selected hidden>Selecione uma opcao</option>
                    {roleData.map((roleOption) => (
                         <option key={roleOption.value} value={roleOption.value}>
                         {roleOption.nameRole}
                       </option>
                    ))}
                    {/* <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option> */}
                </select>
            </label>
           

           <label>
                <span>Senha
                    <input type="password" name='senha' placeholder='Digite uma senha' onChange={(e) => setSenha(e.target.value)} value={senha}/>
                </span>
           </label>

           <label>
                <span>Confirmar Senha
                    <input type="password" name='confirmarSenha' placeholder='Confirme sua senha' onChange={(e) => setConfirmaSenha(e.target.value)} value={confirmaSenha}/>
                </span>
           </label>

           {confirmaSenha == undefined || confirmaSenha !== senha && (
                <div>
                    <p>As Senhas nao estao Iguais</p>
                </div>
           )}

         

            <button disabled={validacaoForm()} type='submit'>Enviar Dados</button>
        </form>
    </div>
  )
}

export default MyForm
import React, { useState } from 'react';

const InfoForm = ({ consumirDadosApiForm , consumirDadosApiTipoRole , pushDadosTabela , valorAttTabela}) => {
  const [apiForm, setApiForm] = useState(
    // { id: 1, nome: "russo", email: "russo@gmail.com", bio: "lorem",role:"editor" , senha: "teste123" },
    {}
  );

  

  const [apiRole , setApiRole] = useState([
    {value:"adm" , nameRole:"Administrador"},
    {value:"editor" , nameRole:"Editor"},
    {value:"user" , nameRole:"Usuario"},
  ])

  const [allWorks , setAllWorks] = useState([
    { id: 1, nome: "russo", email: "russo@gmail.com", bio: "lorem",role:"editor" , senha: "teste123" },
    { id: 2, nome: "Vinicius", email: "vinicius@gmail.com", bio: "lorem",role:"adm" , senha: "teste123"}
  ])



  return (
    <div>
      {consumirDadosApiForm(apiForm)}
      {consumirDadosApiTipoRole(apiRole)}
      {pushDadosTabela(allWorks)}
    </div>
  );
};



export default InfoForm;
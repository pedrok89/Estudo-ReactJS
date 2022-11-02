import axios from 'axios';
import React, { useState } from 'react';


function App(props) {

  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));

   }

  return (

    <>
    <input placeholder="Usuário:" id="usuario" name="usuario" value={usuario} className="usuarioInput" onChange={e => setUsuario(e.target.value)}/>
    <button type='button' onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;

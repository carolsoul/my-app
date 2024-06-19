import React from 'react';
import Image from './imagens/people.png'

import './App.css';

function App() {
  const [comentario, setComentario] = React.useState()
  const [todosOsComentarios, setTodosOsComentarios] = React.useState([])

  function digiteiNoTextarea(eventoDoTextarea){
    setComentario(eventoDoTextarea.target.value)
  }

  function cliqueiNoBotâo(){
    const todosOsComentariosAnteriores = [ ... todosOsComentarios, comentario]

    setTodosOsComentarios(todosOsComentariosAnteriores)
  }

  return (
    <div>
      <img src={Image} alt='imagem-pessoas' />
      <form id='formulario'>
        <p>Vamos começar!</p>
      <textarea onChange={digiteiNoTextarea} id='nome' placeholder='Digite seu nome...'></textarea>
      <textarea onChange={digiteiNoTextarea} id='idade' placeholder='Digite sua idade...'></textarea>
      <button onClick={cliqueiNoBotâo}>Próximo</button>

      <ul>
        {todosOsComentarios.map(coment => (
           <li key={coment}>{coment}</li>
        ))}
      </ul>
      </form>

    </div>
  );
}

export default App;
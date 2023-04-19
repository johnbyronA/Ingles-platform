import React, { useState } from 'react'
import { preguntas, respuestas } from './preguntas_respuestas';

export const Formulario = (props) => {


  const [infouser, setInfouser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);


  const onSend = (event) => {
    event.preventDefault();
    setIsSubmitted(true)
  };


  const onResponse = (event) => {
    setInfouser(event.target.value)
  };



  return (
    <div className='container '>
        <form onSubmit={onSend} className='mt-4 mb-4 '>
          <p>{props.preguntas}</p>
          <input 
          className='m-2'
          type="text"
          placeholder='Escribe tu respuesta'
          value={infouser}
          onChange={onResponse}
          />
          
          <button type="submit" className='' onClick={() => setShowParagraph(true)} >Enviar</button>
          {showParagraph && infouser===props.respuestas.toLowerCase().trim() && infouser.length > 0 ? (<p className='mt-2'>Tu respuesta es ciertamente correcta </p>) : showParagraph && infouser.length != props.respuestas.toLowerCase().trim() && infouser.length > 0 ? (<p className='mt-2'>Error</p>): showParagraph && infouser.length===0 ? (<p className='mt-2'>Debes ingresar un valor </p>) : ("")}
        </form>
    </div>
  )
}



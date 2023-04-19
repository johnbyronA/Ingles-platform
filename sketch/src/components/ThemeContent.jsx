import React, { useState } from 'react'
import { Formulario } from './Formulario'
import { App } from '../App'
import { preguntas } from './preguntas_respuestas'
import { respuestas } from './preguntas_respuestas'

export const ThemeContent = () => {
  useState

  const [entry, setentry] = useState([]);

  const onAddEntry  = (newUserEntry) =>{
    setentry([...entry,newUserEntry])
  }

  return (
    <>
      

      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta1} respuestas={respuestas.respuesta1} />
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta2} respuestas={respuestas.respuesta2}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta3} respuestas={respuestas.respuesta3}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta4} respuestas={respuestas.respuesta4}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta5} respuestas={respuestas.respuesta5}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta6} respuestas={respuestas.respuesta6}/>

      <img className='' src="../../public/images/womanwarrior-cleanedcolor.svg" alt="woman" />

    </>
  )
}


import React, { useReducer, useState } from 'react'
import { Formulario } from './Formulario'
import { App } from '../App'
import { preguntas } from './preguntas_respuestas'
import { respuestas } from './preguntas_respuestas'
import "./app.css"


export const ThemeContent = () => {
  

  const [entry, setentry] = useState([]);

  const onAddEntry  = (newUserEntry) =>{
    setentry([...entry,newUserEntry])
  }


  // ----------UseReducer ---------------------



  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12  col-md-6 text-sm-start text-md-center align-items- justify-content-center'>
            <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta1} respuestas={respuestas.respuesta1}/>
            <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta2} respuestas={respuestas.respuesta2}/>
            <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta3} respuestas={respuestas.respuesta3}/>
            <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta4} respuestas={respuestas.respuesta4}/>
            <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta5} respuestas={respuestas.respuesta5}/>
            <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta6} respuestas={respuestas.respuesta6}/>
            <hr />
            <p>Gracias por tu participación !!</p>

          </div>

          <div className=' col-sm-12 col-md-6  d-flex justify-content-end align-items-end'>
            {/* <p>Has respondido {} preguntas correctas y {} preguntas incorrectas </p> */}
            <img className='pt-4' src="../../public/images/womanwarrior-cleanedcolor.svg" alt="woman" />
          </div>
          
        </div>
      </div>

    </>
  )
}


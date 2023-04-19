import { useState } from "react"
import "./App.css"
import { Formulario } from "./components/Formulario";
import { preguntas } from "./components/preguntas_respuestas";
import { respuestas } from "./components/preguntas_respuestas";
import { DescriptionCourse } from './components/DescriptionCourse';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";




export function App() {

  const [entry, setentry] = useState([]);

  const onAddEntry  = (newUserEntry) =>{
    setentry([...entry,newUserEntry])
  }

  return (
    <>

      <Header />
      <DescriptionCourse />

      {/* <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta1} respuestas={respuestas.respuesta1} />
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta2} respuestas={respuestas.respuesta2}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta3} respuestas={respuestas.respuesta3}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta4} respuestas={respuestas.respuesta4}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta5} respuestas={respuestas.respuesta5}/>
      <Formulario onNewEntry ={onAddEntry} preguntas={preguntas.pregunta6} respuestas={respuestas.respuesta6}/> */}

      <Footer/>
    </>
    
  )
}

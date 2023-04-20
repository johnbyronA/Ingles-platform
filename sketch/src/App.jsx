import { useState } from "react"
import "./App.css"
import { Formulario } from "./components/Formulario";
import { preguntas } from "./components/preguntas_respuestas";
import { respuestas } from "./components/preguntas_respuestas";
import { DescriptionCourse } from './components/DescriptionCourse';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeContent } from "./components/ThemeContent";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Classmaterial } from "./components/Classmaterial";
// import { Pokeapi } from "./components/Pokeapi";

export function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<DescriptionCourse />} />
        <Route path="/about" element={<ThemeContent/>} />
        <Route path="/content" element={<Classmaterial/>} />
      </Routes>
      <Footer />
    </>
    
  )
}

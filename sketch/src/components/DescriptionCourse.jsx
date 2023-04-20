import React from 'react'

export const DescriptionCourse = () => {
  return (
    <>
     <section className=''>
        <div className='container-fluid'>
            <div className='container py-2'>
                <h1 className='pt-4'>Objetivo de la plataforma:</h1>
                <p className='pt-3'> Hemos creado esta plataforma para aprender Inglés entre todos y desde cero como amigos, con compromiso y dedicación, a ver si algún dia nos largamos de este moridero. </p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 '>    
                        <h2>Integrantes del grupo</h2>
                        <ul type="square" className='pt-3'>
                            <li>John Alzate</li>
                            <li>Jorge Genes</li>
                            <li>Johana Lopez</li>
                            <li>Manuela Gonzales</li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className='container py-2'>
                <h2>Temas iniciales:</h2>
                <ul className='pt-2'>
                    <li>Números y horas del día</li>
                    <li>Saludos y presentaciones</li>
                    <li>Verbo To-Be</li>
                </ul>
            </div>
            <div className='container pb-2'>
                <h2>Recursos Iniciales:</h2>
                <p className='pt-3'><a href="https://www.youtube.com/watch?v=ZS9vOhfrvRw&ab_channel=EspeakEnglishAprenderIngl%C3%A9sR%C3%A1pidoyF%C3%A1cil">Verbo To-be</a></p>
                <p className='pt-1'><a href="https://www.youtube.com/watch?v=ZS9vOhfrvRw&ab_channel=EspeakEnglishAprenderIngl%C3%A9sR%C3%A1pidoyF%C3%A1cil">Presentaciones en Inglés</a></p>
                <p className='pt-1 pb-3'><a href="https://www.youtube.com/watch?v=ZS9vOhfrvRw&ab_channel=EspeakEnglishAprenderIngl%C3%A9sR%C3%A1pidoyF%C3%A1cil">Past and Present Tense</a></p>

            </div>           
        </div>
     </section>   
    </>
  )
}



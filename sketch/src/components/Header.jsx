import React from 'react'
import { Link } from 'react-router-dom';


export const Header = () => {


  return (
    <>

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
            <a className="navbar-brand" href="#">English Platform </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className='nav-link' aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' aria-current="page" to="/about">Ejercicios</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' aria-current="page" to="/content">Material de clase</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>

    </>
  )
}



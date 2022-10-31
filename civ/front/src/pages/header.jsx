import React from "react";
import { Link } from "react-router-dom"

import './../css/Header.css'

const Header = () => {
    return ( 
        <header>
            <div className="visually-hidden">
                <h1>Esparta</h1>
            </div>
            <div className="header">
                <a href="/">
                    <div className="image_logo">
                        <img src="/isologotipo_esparta.png" alt="Logotipo de Esparta" />
                    </div>
                </a>
                <nav>
                    <ul>
                        <Link to={`/`}>Inicio</Link>
                        <Link to={`/blog`}>Blog</Link>
                        <Link to={`/login`}>Ingresar</Link>
                        <Link to={`/register`}>Crear cuenta</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
import React from "react";

import './../css/Header.css'

const Header = () => {
    return ( 
        <header>
            <a href="/vehiculos">
                <div className="header__logo">
                    <img src="/logo.png" alt="Logo de Electromecánica Halmes" />
                </div>
                <div>
                    <h1>Electromecanica Halmes</h1>
                </div>
            </a>
        </header>
    )
}

export default Header
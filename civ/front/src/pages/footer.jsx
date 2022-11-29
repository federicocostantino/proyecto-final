import React from "react";
import './../css/footer.css'

function Footer(){
    return (
        <footer className="footer">
            <div className="header">
                <div className="image_logo mb-5">
                    <img src="/logoblanco.png" alt="Logotipo de Esparta" />
                </div>
            </div>
            <div className="content">
                <p>Proyecto final de la carrera Diseño y Programación Web</p>
                <p className="mb-3">Escuela DaVinci de Arte Multimedial</p>
                <p>Sitio diseñado por:</p>
                <ul className="p-0 m-0">
                    <li>Brandi, Lucio</li>
                    <li>Costantino, Federico</li>
                    <li>Sanchez Liporacce, Andrea</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
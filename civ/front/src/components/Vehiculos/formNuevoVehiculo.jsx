import  React, { useState } from "react"
import { Link } from "react-router-dom"
import * as VehiculosService from "../../Services/vehiculos.services"

import './../../css/loginPage.css'

const nuevoVehiculo = () => {

    const [patente, setPatente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [fabricacion, setFabricacion] = useState('')
    const [color, setColor] = useState('')
    const [km, setKm] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(patente !== '' && propietario !== '') {
            VehiculosService.nuevoVehiculo({patente, marca, modelo, fabricacion, color, propietario, km})
        } else {
            setError('Debe completar todos los campos requeridos')
        }
    }
    
    return (
        <div>
            <h2 className="mt-5">Ingrese los datos del nuevo Vehículo</h2>
            <span>* campos requeridos</span>
            <div className="login-page">
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}> 
                        <input name="patente" id="patente" type="text" placeholder="Patente *"
                            onChange={(e) => setPatente(e.target.value)}
                            value={patente} 
                        />
                        <input name="propietario" id="propietario" type="number" placeholder="DNI del propietario *"
                            onChange={(e) => setPropietario(Number(e.target.value))}
                            value={propietario} 
                        />
                        <input name="marca" id="marca" type="text" placeholder="Marca"
                            onChange={(e) => setMarca(e.target.value)}
                            value={marca} 
                        />
                        <input name="modelo" id="modelo" type="text" placeholder="Modelo"
                            onChange={(e) => setModelo(e.target.value)}
                            value={modelo} 
                        />
                        <input name="fabricacion" id="fabricacion" type="number" placeholder="Año de fabricación"
                            onChange={(e) => setFabricacion(Number(e.target.value))}
                            value={fabricacion} 
                        />
                        <input name="color" id="color" type="text" placeholder="Color"
                            onChange={(e) => setColor(e.target.value)}
                            value={color} 
                        />
                        <input name="km" id="km" type="number" placeholder="Kilómetros actuales"
                            onChange={(e) => setKm(Number(e.target.value))}
                            value={km} 
                        />
                        
                        <button type="submit" className="mb-3">Guardar</button>
                        <Link to='/vehiculos'>Volver</Link>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default nuevoVehiculo


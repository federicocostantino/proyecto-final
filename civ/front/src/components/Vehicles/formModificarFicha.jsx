import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import * as VehiculosService from "../../Services/vehicles";


const nuevoVehiculo = () => {
    const { patente } = useParams()
    
    const [pat, setPatente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [fabricacion, setFabricacion] = useState('')
    const [color, setColor] = useState('')
    const [km, setKm] = useState('')

    useEffect(() => {
        VehiculosService.findOne(patente)
        .then(vehiculo => {
            setPatente(vehiculo.patente)
            setPropietario(vehiculo.propietario)
            setMarca(vehiculo.marca)
            setModelo(vehiculo.modelo)
            setFabricacion(vehiculo.fabricacion)
            setColor(vehiculo.color)
            setKm(vehiculo.km)
        })
    }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        VehiculosService.editarVehiculo(patente, {pat,marca,modelo,fabricacion,color,propietario,km})
    }

    return (
        <div>
            <h2 className="mt-5">Ingrese los NUEVOS datos del Vehículo</h2>
            <div className="login-page">
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
                        <Link to={`/vehiculos/${patente}`}>Volver</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default nuevoVehiculo


import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import * as VehiculosService from "../../../Services/vehicles"

const ModicarServicio = () => {
    const { patente, id } = useParams()

    const [detalle, setDetalle] = useState('')
    const [valor, setValor] = useState('')
    const [km, setKm] = useState('')
    const [fecha, setFecha] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        VehiculosService.findOneService(patente, id)
        .then(servicio => {
            setDetalle(servicio.detalle)
            setValor(servicio.valor)
            setKm(servicio.km) 
            setFecha(servicio.fecha)
        })
    }, [])
    
    const handleDetalle = (event) => setDetalle(event.target.value)
    const handleValor = (event) => setValor(Number(event.target.value))
    const handleKm = (event) => setKm(Number(event.target.value))
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (detalle !== '' && valor !== '' && km !== '') {
            VehiculosService.patchOneServicio({id, detalle, patente, valor, km, fecha})
        } else {
            setError('Debe completar todos los campos requeridos')
        }
    }

    return (
        <div>
            <h2 className="mt-5">Ingrese los NUEVOS datos del Servicio</h2>
            <span>* campos requeridos</span>
            <div className="login-page">
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input name="fecha" id="fecha" type="text" readOnly value={fecha} 
                    />
                    <input name="patente" id="patente" type="text" readOnly value={patente} 
                    />
                    <input name="detalle" id="detalle" type="text" placeholder="Detalle del servicio realizado *"
                        onChange={handleDetalle}
                        value={detalle}
                    />
                    <input name="valor" id="valor" type="number" placeholder="Valor del servicio *"
                        onChange={handleValor}
                        value={valor} 
                    />
                    <input name="km" id="km" type="number" placeholder="Kilómetros actuales *"
                        onChange={handleKm}
                        value={km}
                    />
                    
                    <button type="submit">Guardar cambios</button>
                    <Link to={`/vehiculos/${patente}`} className="mt-3">Volver</Link>
                    </form>
                </div>
            </div>            
        </div>
    )
}


export default ModicarServicio


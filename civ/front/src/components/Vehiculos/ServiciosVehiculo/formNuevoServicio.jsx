import  React, { useState } from "react"
import * as VehiculosService from "../../../Services/vehiculos.services"
import { useParams, Link } from 'react-router-dom'

const formNuevoServicio = () => {
    const today = new Date()
    const fecha = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()

    const { patente } = useParams()
    const [detalle, setDetalle] = useState('')
    const [valor, setValor] = useState('')
    const [km, setKm] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(detalle !== '' && valor !== '' && km !== '') {
            VehiculosService.nuevoServicio({detalle, patente, valor, km, fecha})
        } else {
            setError('Debe completar todos los campos requeridos')
        }
    }

    return (
        <div>
            <h2 className="mt-5">Ingrese el nuevo Servicio realizado</h2>
            <span>* campos requeridos</span>
            <div className="login-page">
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <div className="form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input name="patente" id="patente" type="text" readOnly value={patente}
                        />
                        <input type="text" name="detalle" id="detalle" placeholder="Detalle del servicio realizado *"
                            onChange={(e) => setDetalle(e.target.value)}
                        />
                        <input name="valor" id="valor" type="number" min={0} placeholder="Valor del servicio *"
                            onChange={(e) => setValor(Number(e.target.value))}
                            value={valor} 
                        />
                        <input name="km" className="km" type="number" min={0} placeholder="Kilómetros actuales *"
                            onChange={(e) => setKm(Number(e.target.value))}
                            value={km} 
                        />
                        
                        <button type="submit">Crear</button>
                        <Link to={`/vehiculos/${patente}`} className="mt-3">Volver</Link>
                    </form>   
                </div>
            </div>
        </div>
    )
}

export default formNuevoServicio
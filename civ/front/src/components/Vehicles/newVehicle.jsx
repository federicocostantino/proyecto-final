import  React, { useState } from "react"
import { Link } from "react-router-dom"
import * as VehiclesService from "../../Services/vehicles"

import './../../css/loginPage.css'

const newVehicle = () => {

    const types = ['MOTOCICLETA', 'VEHÍCULO', 'CAMIÓN']
    const colors = ['ROJO', 'VERDE', 'NEGRO', 'GRIS', 'AZUL', 'PLATEADO', 'BURDEO', 'BLANCO', 'AMARILLO', 'PLOMO', 'BEIGE', 'MARRÓN']

    const [domain, setDomain] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const [chassis, setChassis] = useState('')
    const [insurance, setInsurance] = useState('')

    const [error, setError] = useState('')

    const deleteDiacritics = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const vehicle = {domain, make, model, type, color, year, chassis, insurance}
        if(domain !== '' && make !== '') {
            VehiclesService.newVehicle(vehicle)
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
                        <input name="domain" id="domain" type="text" placeholder="Dominio *"
                            onChange={(e) => setDomain(e.target.value)}
                            value={domain} 
                        />
                        <input name="make" id="make" type="text" placeholder="Marca *"
                            onChange={(e) => setMake(e.target.value)}
                            value={make} 
                        />
                        <input name="model" id="model" type="text" placeholder="Modelo"
                            onChange={(e) => setModel(e.target.value)}
                            value={model} 
                        />
                        <label>
                            Tipo
                            <select 
                                value={type} 
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="" selected disabled></option>
                                {types.map(type => {
                                    return (
                                        <option value={deleteDiacritics(type)}>{type}</option>
                                    );
                                })}
                            </select>
                        </label>
                        <label>
                            Color
                            <select 
                                value={color} 
                                onChange={(e) => setColor(e.target.value)}
                            >
                                <option value="" selected disabled></option>
                                {colors.map(color => {
                                    return (
                                        <option value={deleteDiacritics(color)}>{color}</option>
                                    );
                                })}
                            </select>
                        </label>
                        <input name="year" id="year" type="number" placeholder="Año" min={new Date().getFullYear() - 70} max={new Date().getFullYear()}
                            onChange={(e) => setYear(Number(e.target.value))}
                            value={year}
                        />
                        <input name="chassis" id="chassis" type="text" placeholder="N° Chasis"
                            onChange={(e) => setChassis(e.target.value)}
                            value={chassis} 
                        />
                        <input name="insurance" id="insurance" type="text" placeholder="Seguro"
                            onChange={(e) => setInsurance(e.target.value)}
                            value={insurance} 
                        />
                        
                        <button type="submit" className="mb-3">Guardar</button>
                        <Link to='/vehicles'>Volver</Link>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default newVehicle


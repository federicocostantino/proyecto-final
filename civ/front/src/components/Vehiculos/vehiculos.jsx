import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as VehiculosService from "../../Services/vehiculos.services";

import './../../css/Vehiculos.css'

const Vehiculos = () => {
    const [vehiculos, setVehiculos] = useState([]);
    
    useEffect(() => {
        VehiculosService.find()
        .then(vehiculos => setVehiculos(vehiculos))
    }, [])

    const handleSubmitEliminar = (e) => {
        e.preventDefault()
        const patente = e.target.name
        VehiculosService.deleteOne(patente)        
    }

    const cerrarSesion = () => {
        localStorage.removeItem('auth-token')
        window.location.href = '/'
    }

    return (
        <div>
            <div className="btn__cerrarSesion d-flex justify-content-end mt-3">
                <button className="btn btn-danger" onClick={cerrarSesion}>Cerrar sesión</button>
            </div>
            <h2 className="mt-5">Listado de vehículos</h2>
            <Link to={`/vehiculos/nuevo_vehiculo`} className="btn btn-primary mb-4 w-50">Ingresar Nuevo Vehiculo</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {vehiculos.map((vehiculo, i) => 
                        <tr key={i}> 
                            <td>{vehiculo.patente}</td>
                            <td>{vehiculo.marca}</td>
                            <td>{vehiculo.modelo}</td>
                            <td>
                                <div>
                                    <Link to={`/vehiculos/${vehiculo.patente}`} className="btn btn-primary mx-3">Ver</Link>
                                </div>
                                <form onSubmit={handleSubmitEliminar} name={vehiculo.patente}>
                                    <button className="btn btn-danger" type="submit">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Vehiculos
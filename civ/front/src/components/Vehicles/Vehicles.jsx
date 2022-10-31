import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as VehiclesService from '../../Services/vehicles'

import './../../css/Vehicles.css'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    
    useEffect(() => {
        VehiclesService.findAll()
            .then(vehicles => setVehicles(vehicles))
    }, [])

    const handleSubmitDelete = (e) => {
        e.preventDefault()
        VehiclesService.deleteOne(e.target.name) 
    }

    const logout = () => {
        localStorage.removeItem('auth-token')
        window.location.href = '/'
    }

    return (
        <div>
            <div className="btn__logout d-flex justify-content-end mt-3">
                <button 
                    className="btn btn-danger" 
                    onClick={logout}
                >
                    Cerrar sesión
                </button>
            </div>
            <h2 className="mt-5">Listado de vehículos</h2>
            <Link 
                to={`/vehicles/new-vehicle`} 
                className="btn btn-primary mb-4 w-50"
            >
                Ingresar Nuevo Vehiculo
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Vehículo</th>
                        <th>Dominio</th>
                        <th>Tipo</th>
                        <th>Color</th>
                        <th>Año</th>
                        <th>N° Chasis</th>
                        <th>Seguro</th>
                        <th>Histórico de servicios</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, i) => 
                        <tr key={i}> 
                            <td>{ `${vehicle.make} ${vehicle.model || ''}` }</td>
                            <td>{ vehicle.domain }</td>
                            <td>{vehicle.type || ''}</td>
                            <td>{ vehicle.color || '' }</td>
                            <td>{ vehicle.year || '' }</td>
                            <td>{ vehicle.chassis || '' }</td>
                            <td>{ vehicle.insurance || '' }</td>
                            <td><Link to="#" className="btn btn-primary mx-3">Ver histórico</Link></td>
                            <td>
                                {/* <Link to={`/vehiculos/${vehicle.patente}`} className="btn btn-primary mx-3">Ver</Link> */}
                                <Link to={`/vehicles/${vehicle.domain}/edit`} className="btn btn-primary mx-3">Editar</Link>

                                <form onSubmit={handleSubmitDelete} name={vehicle.domain}>
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

export default Vehicles
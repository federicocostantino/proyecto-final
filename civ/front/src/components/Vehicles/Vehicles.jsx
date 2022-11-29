import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import * as VehiclesService from '../../Services/vehicles'
import * as authService from '../../Services/auth.services'

import './../../css/Vehicles.css'

const Vehicles = () => {
    let navigate = useNavigate()
    const [vehicles, setVehicles] = useState([])
    
    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            VehiclesService.findAll()
                .then(vehicles => setVehicles(vehicles))
        } else {
            navigate('/', {replace: true})
        }
    }, [])

    const handleSubmitDelete = (e) => {
        e.preventDefault()
        VehiclesService.deleteOne(e.target.name) 
    }

    return (
        <div className="vehicles">
            <div className="header">
                <p>Listado de Vehículos</p>
            </div>
            <div className="content">
                <div className="table">
                    <div className="link">
                        <Link 
                            to={`/vehicles/new-vehicle`} 
                            className="btn__load-new"
                        >
                            Ingresar Nuevo Vehiculo
                        </Link>
                    </div>
                    <div className="listing">
                        <div className="header">
                            <div>
                                <p>Vehículo</p>
                                <p>Dominio</p>
                                <p>Tipo</p>
                                <p>Color</p>
                                <p>Año</p>
                                <p>Seguro</p>
                                <p>Servicios</p>
                                <p>Acciones</p>
                            </div>
                        </div>
                        <div className="data">
                            {vehicles.map((vehicle, i) => 
                                <div key={i}> 
                                    <p>{ `${vehicle.make} ${vehicle.model || ''}` }</p>
                                    <p>{ vehicle.domain }</p>
                                    <p>{ vehicle.type || '' }</p>
                                    <p>{ vehicle.color || '' }</p>
                                    <p>{ vehicle.year || '' }</p>
                                    <p>{ vehicle.insurance || '' }</p>
                                    <p><Link to="#" className="btn__see-more">Ver</Link></p>
                                    <p>
                                        <Link to={`/vehicles/${vehicle.domain}/edit`} className="btn__edit">Modificar</Link>

                                        <form onSubmit={handleSubmitDelete} name={vehicle.domain}>
                                            <button className="btn__delete" type="submit">Eliminar</button>
                                        </form>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* <table className="table">
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
                                <td>{ vehicle.type || '' }</td>
                                <td>{ vehicle.color || '' }</td>
                                <td>{ vehicle.year || '' }</td>
                                <td>{ vehicle.chassis || '' }</td>
                                <td>{ vehicle.insurance || '' }</td>
                                <td><Link to="#" className="btn btn-primary mx-3">Ver histórico</Link></td>
                                <td>
                                    <Link to={`/vehicles/${vehicle.domain}/edit`} className="btn btn-primary mx-3">Editar</Link>

                                    <form onSubmit={handleSubmitDelete} name={vehicle.domain}>
                                        <button className="btn btn-danger" type="submit">Eliminar</button>
                                    </form>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default Vehicles
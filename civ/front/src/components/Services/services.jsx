import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as ServicesService from '../../Services/services'

import './../../css/Vehicles.css'

const services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        ServicesService.findAll()
            .then(services => setServices(services))
    }, [])

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
            <h2 className="mt-5">Listado de Servicios</h2>
            <Link 
                to="#" 
                className="btn btn-primary mb-4 w-50"
            >
                Ingresar Nuevo Servicio
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Vehículo</th>
                        <th>Cliente</th>
                        <th>Orden</th>
                        <th>Fecha</th>
                        <th>Pago</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, i) => 
                        <tr key={i}> 
                            <td>{ service.state || '' }</td>
                            <td>{ service.vehicle }</td>
                            <td>{ service.client || '' }</td>
                            <td>{ service.order || '' }</td>
                            <td>{ service.date || '' }</td>
                            <td>{ service.payment || '' }</td>
                            <td>{ service.total || '' }</td>
                            <td>
                                <button>editar</button>
                                <button>eliminar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default services
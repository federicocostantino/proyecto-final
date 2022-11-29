import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import * as ServicesService from '../../Services/services'
import * as authService from '../../Services/auth.services'

import './../../css/Vehicles.css'

const services = () => {
    let navigate = useNavigate()
    const [services, setServices] = useState([])

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            ServicesService.findAll()
                .then(services => setServices(services))
        } else {
            navigate('/', {replace: true})
        }
    }, [])

    return (
        <div>
            <h2 className="mt-5">Listado de Servicios</h2>
            <Link 
                to={`/services/new-service`}
                className="btn btn-primary mb-4 w-50"
            >
                Ingresar Nuevo Servicio
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Vehículo</th>
                        <th>Cliente</th>
                        <th>Orden</th>
                        <th>Total</th>
                        <th>Pago</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, i) => 
                        <tr key={i}> 
                            <td>{ service.date || '' }</td>
                            <td>{ service.domain }</td>
                            <td>{ service.client || '' }</td>
                            <td>{ service.order || '' }</td>
                            <td>$ { service.total || '' }</td>
                            <td>{ service.payment || '' }</td>
                            <td>{ service.state || '' }</td>
                            <td>
                                <button>editar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default services
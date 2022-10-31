import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import * as VehiculosService from "../../../Services/vehicles"

const ServiciosVehiculo = () => {
    const { patente } = useParams()
    const [servicios, setServicios] = useState([])
    const [idEndService, setidEndService] = useState(0);
    
    useEffect(()=>{
        VehiculosService.findService(patente)
            .then(servicios => setServicios(servicios))
    }, [idEndService])

    const handleSubmitEndService = (e) => {
        e.preventDefault()
        VehiculosService.patchEndService({
            id: idEndService
        })
            .then(response => {
                setidEndService('Completo')
            })
            .catch(err => {
                console.log('Error: ' + err);
            })
        ;
    }

    const handleSubmitEliminar = (e) => {
        e.preventDefault()
        VehiculosService.deleteOneService(patente)
    }

    return (
        <div className="col-8 caja">
            <div className="row pt-0">
                <h3 className="col-6">Servicios</h3>
                <Link to={`/vehiculos/${patente}/nuevo_servicio`} className="btn btn-primary col-6">Nuevo Servicio</Link>
            </div>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>Fecha</th>
                        <th>Valor</th>
                        <th>Kilómetros</th>
                        <th>Detalle</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map((servicio, i) => 
                        <tr key={i}>
                            <td>{ servicio.fecha }</td>
                            <td>$ { servicio.valor }</td>
                            <td>{ servicio.km } km.</td>
                            <td>{ servicio.detalle }</td>
                            <td>{ servicio.state }</td>
                            <td>
                                <div className="p-0">
                                    {servicio.state === 'En curso'
                                        ?   <form onSubmit={handleSubmitEndService}>
                                                <button 
                                                    className="btn btn-success" 
                                                    type="submit"
                                                    value={servicio._id}
                                                    onClick={() => setidEndService(servicio._id)}
                                                >Finalizar</button>
                                            </form>
                                        :   ''
                                    }
                                </div>
                                <div className="p-0">
                                    <Link to={`/vehiculos/${patente}/modificar_servicio/${servicio._id}`} className="btn btn-primary mx-3">Editar</Link>
                                </div>
                                <form onSubmit={handleSubmitEliminar} name={servicio.patente}>
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

export default ServiciosVehiculo
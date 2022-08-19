import React from "react";
import { Link, useParams } from "react-router-dom"

import FichaVehiculo from './FichaVehiculo/fichaVehiculo'
import ServiciosVehiculo from "./ServiciosVehiculo/ServiciosVehiculo"

const Vehiculo = () => {
    const { patente } = useParams()

    return (
        <div>
            <h2 className="my-5">Vehículo: {patente}</h2>
            <div className="row">
                <FichaVehiculo patente={patente} />
                <ServiciosVehiculo />
            </div>
            <div className="col-12">
                <Link to={'/vehiculos'}>Volver</Link>
            </div>
        </div>
    )
}

export default Vehiculo
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import * as VehiculosService from "../../../Services/vehiculos.services";

const fichaVehiculo = ({patente}) => {
    const [vehiculo, setVehiculo] = useState([]);
    
    useEffect(()=>{
        VehiculosService.findOne(patente)
            .then(vehiculo => setVehiculo(vehiculo))
    }, [])

    return (
        <div className="col-4 p-2 caja ficha">
            <h3>Ficha del Vehículo</h3>
            <ul className="text-left">
                <li>Patente: {vehiculo.patente}</li>
                <li>Propietario: {vehiculo.propietario}</li>
                <li>Marca: {vehiculo.marca}</li>
                <li>Modelo: {vehiculo.modelo}</li>
                <li>Año de Fabricación: {vehiculo.fabricacion}</li>
                <li>Km: {vehiculo.km}</li>
            </ul>
            <div>
                <Link to={`/vehiculos/${patente}/modificar_ficha`} className="btn btn-primary w-50">Modificar Ficha</Link>
            </div>
        </div>
    )
}

export default fichaVehiculo
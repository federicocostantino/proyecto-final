import  React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as VehiclesServices from './../../Services/vehicles.js'
import * as ServicesServices from './../../Services/services.js'

const newService = () => {
    const date = new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear()
    const [vehicles, setVehicles] = useState([])

    const [domain, setDomain] = useState('')
    const [client, setClient] = useState(0)
    const [order, setOrder] = useState('')
    const [detail, setDetail] = useState('')
    const [total, setTotal] = useState(0)

    useEffect(() => {
        VehiclesServices.findAll()
            .then(vehicles => setVehicles(vehicles))
            .catch(err => console.error(err))
        
        ServicesServices.numberOfServices()
            .then(quantity => setOrder(quantity + 1))
            .catch(err => console.error(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newService = {
            state: 'Pendiente',
            client,
            order,
            date,
            payment: 'Pendiente',
            total,
            domain
        }
        ServicesServices.newService(newService)
    }

    return (
        <>
            <h2 className="mt-5">Ingrese un nuevo Servicio</h2>
            <span>* campos requeridos</span>
            
            {/* mensaje de error */}

            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="domain">Vehículo *
                        <select
                            defaultValue={"0"}
                            onChange={(e) => setDomain(e.target.value)}
                        >
                            <option value="0" disabled>---</option>
                            {vehicles.map(vehicle => {
                                return(
                                    <option key={vehicle.domain} value={vehicle.domain}>{vehicle.domain}</option>
                                )
                            })}
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="client">DNI del Cliente
                        <input 
                            type="number" 
                            name='client' 
                            id='client'
                            min={0}
                            onChange={(e) => setClient(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="order">N° de orden *
                        <input 
                            type="number" 
                            name='order' 
                            id='order' 
                            readOnly
                            value={order}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="date">Fecha *
                        <input 
                            type="text" 
                            name='date' 
                            id='date' 
                            readOnly
                            value={date}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="date">Detalle
                        <textarea 
                            name="detail" 
                            id="detail" 
                            cols="30" 
                            rows="2"
                            onChange={(e) => setDetail(e.target.value)}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label htmlFor="total">Total $
                        <input 
                            type="number" 
                            name='total' 
                            id='total'
                            min={0}
                            onChange={(e) => setTotal(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Crear</button>
                    <Link to={'/services'}>Volver</Link>
                </div>
            </form>
        </>
    )
}

export default newService
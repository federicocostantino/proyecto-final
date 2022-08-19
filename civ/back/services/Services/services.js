import { database } from './database.js'
import * as servicesVehiculos from './services.vehiculos.js'
import * as servicesServicios from './services.servicios.js'

// VEHICULOS
const getOneByPatente = (patente, collection) => servicesVehiculos.getOneByPatente(patente, collection)
const postVehiculo = (vehiculo, collection) => servicesVehiculos.postVehiculo(vehiculo, collection)
const patchVehiculo = (patente, vehiculo, collection) => servicesVehiculos.patchVehiculo(patente, vehiculo, collection)

// SERVICIOS
const getAllByPatente = (patente, collection) => servicesServicios.getAllByPatente(patente, collection)
const getServicioById = (id, collection) => servicesServicios.getServicioById(id, collection)
const postServicio = (servicio, collection) => servicesServicios.postServicio(servicio, collection)
const patchServicio = (servicio, collection) => servicesServicios.patchServicio(servicio, collection)

// COMPARTIDO
const getAll = async (collection) => 
    database(async db => {
        try {
            const data = await db.collection(collection).find().toArray()
            return data
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const deleteDocument = async (patente, collection) =>
    database(async db => {
        try {
            const deleted = await db.collection(collection).deleteOne({patente})
            return deleted.deletedCount
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })
    
export {
    getAll,
    getAllByPatente,
    getOneByPatente,
    postVehiculo,
    postServicio,
    patchVehiculo,
    deleteDocument,
    getServicioById,
    patchServicio,
}
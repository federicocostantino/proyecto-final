import { database, ObjectId } from './database.js'
// import * as servicesVehiculos from './services.vehiculos.js'
// import * as servicesServicios from './services.servicios.js'

const COLLECTION_NAME = 'servicios'

// SERVICIOS
// const getAllByPatente = (patente, collection) => servicesServicios.getAllByPatente(patente, collection)
// const getServicioById = (id, collection) => servicesServicios.getServicioById(id, collection)
// const postServicio = (servicio, collection) => servicesServicios.postServicio(servicio, collection)
// const patchServicio = (servicio, collection) => servicesServicios.patchServicio(servicio, collection)



// const endService = async (id, collection) =>
//     database(async db => {
//         try {
//             const servicioModificado = await db.collection(collection).updateOne({_id: ObjectId(id)},{$set: {
//                 state: 'Completo'
//             }})
//             return servicioModificado
//         } catch (error) {
//             console.log(`Error: ${error}`)
//         }
//     })
    
export {
    // findAll
    // getAllByPatente,
    // postServicio,
    // getServicioById,
    // patchServicio,
    // endService
}
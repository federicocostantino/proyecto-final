import * as service from './Services/services.js'

const COLLECTION_NAME = 'vehiculos'

const dameTodos = async () => service.getAll(COLLECTION_NAME)
const dameVehiculo = async (patente) => service.getOneByPatente(patente, COLLECTION_NAME)
const grabarVehiculo = async (vehiculo) => service.postVehiculo(vehiculo, COLLECTION_NAME)
const borraVehiculo = async (patente) => service.deleteDocument(patente, COLLECTION_NAME)
const modificarVehiculo = async (patente, vehiculo) => service.patchVehiculo(patente, vehiculo, COLLECTION_NAME)

export{
    dameTodos,
    grabarVehiculo,
    dameVehiculo,
    borraVehiculo,
    modificarVehiculo
}
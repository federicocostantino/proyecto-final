import * as service from './Services/services.js'

const COLLECTION_NAME = 'servicios'

const dameTodos = async () => service.getAll(COLLECTION_NAME)
const dameServiciosPorPatente = async (patente) => service.getAllByPatente(patente, COLLECTION_NAME)
const dameServicioPorId = async (id) => service.getServicioById(id, COLLECTION_NAME)
const grabarServicio = async (servicio) => service.postServicio(servicio, COLLECTION_NAME)
const editarServicio = async (servicio) => service.patchServicio(servicio, COLLECTION_NAME)
const borrarServicio = async (patente) => service.deleteDocument(patente, COLLECTION_NAME)

export {
    dameTodos,
    dameServiciosPorPatente,
    dameServicioPorId,
    grabarServicio,
    editarServicio,
    borrarServicio
}
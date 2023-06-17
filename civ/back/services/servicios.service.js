import * as services from './Services/services.js'
import { database, ObjectId } from './Services/database.js'

const COLLECTION_NAME = 'servicios'

const findAll = async () => 
    database(async db => {
        try {
            return await db.collection(COLLECTION_NAME).find().toArray()
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const findOne = async (id) =>
    database(async db => {
        try {
            const service = await db.collection(COLLECTION_NAME).findOne({_id: ObjectId(id)})
            return service
        } catch (error) {
            console.log(`Error: ${error}`)
        }
})

const newService = async (service) =>
    database(async db => {
        try {
            await db.collection(COLLECTION_NAME).insertOne(service)
            return service
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

// const edit = async (servicio) => services.patchServicio(servicio, COLLECTION_NAME)
const edit = async (service, id) =>
    database(async db => {
        try {
            const modifiedService = await db.collection(COLLECTION_NAME).updateOne({_id: ObjectId(id)},{$set: {
                date: service.date,
                km: service.km,
                spareParts: service.spareParts,
                detail: service.detail,
                total: service.total
            }})
            return modifiedService
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const numberOfServices = async () =>
    database(async db => {
        try {
            return await db.collection(COLLECTION_NAME).count()
        } catch (error) {
            console.log('catch')
            console.log(`Error: ${error}`)
        }
    })

// const dameTodos = async () => services.getAll(COLLECTION_NAME)
// const dameServiciosPorPatente = async (patente) => services.getAllByPatente(patente, COLLECTION_NAME)

// const grabarServicio = async (servicio) => services.postServicio(servicio, COLLECTION_NAME)

// const borrarServicio = async (patente) => services.deleteDocument(patente, COLLECTION_NAME)
// const endService = async (id) => services.endService(id, COLLECTION_NAME)

export {
    findAll,
    findOne,
    newService,
    edit,
    numberOfServices
    // dameServiciosPorPatente,
    // dameServicioPorId,
    // grabarServicio,
    // editarServicio,
    // borrarServicio,
    // endService
}
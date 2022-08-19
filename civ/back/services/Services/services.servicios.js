import { database, ObjectId } from './database.js'

const getAllByPatente = async (patente, collection) => 
    database(async db => {
        try {
            const servicios = await db.collection(collection).find({patente}).toArray()
            return servicios
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const getServicioById = async (id, collection) =>
    database(async db => {
        try {
            const servicio = await db.collection(collection).findOne({_id: ObjectId(id)})
            return servicio
        } catch (error) {
            console.log(`Error: ${error}`)
        }
})

const postServicio = async (servicio, collection) =>
    database(async db => {
        try {
            await db.collection(collection).insertOne(servicio)
            return servicio
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const patchServicio = async (servicio, collection) =>
    database(async db => {
        try {
            const servicioModificado = await db.collection(collection).updateOne({_id: ObjectId(servicio.id)},{$set: {
                detalle: servicio.detalle,
                valor: servicio.valor,
                km: servicio.km,
            }})
            return servicioModificado
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

export {
    getAllByPatente,
    getServicioById,
    postServicio,
    patchServicio,
}
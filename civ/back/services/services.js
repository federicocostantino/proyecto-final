import { database, ObjectId } from './database.js'

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

export {
    findAll,
    findOne,
    newService,
    edit,
    numberOfServices
}
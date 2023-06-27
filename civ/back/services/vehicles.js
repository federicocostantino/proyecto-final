import { database } from './database.js'

const COLLECTION_NAME = 'vehiculos'

const findAll = async () => 
    database(async db => {
        try {
            return await db.collection(COLLECTION_NAME).find().toArray()
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const createOne = async (vehicle) =>
    database(async db => {
        try {
            const exist = await findOne(vehicle.domain)
            if(!exist) {
                await db.collection(COLLECTION_NAME).insertOne(vehicle)
                return vehicle
            } else {
                return null
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        } 
    })

const findOne = async (domain) =>
    database(async db => {
        try {
            const vehicle = await db.collection(COLLECTION_NAME).findOne({domain})
            return vehicle
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const editOne = async (domain, vehicle) =>
    database(async db => {
        try {
            // TO-DO: Agregar cuando esté la funcionalidad de Servicios
            // await db.collection('servicios').updateMany({domain}, {$set: {
            //     domain: vehicle.domain,
            // }})

            return await db.collection(COLLECTION_NAME).updateOne({domain}, {$set: {
                domain: vehicle.domain,
                make: vehicle.make,
                model: vehicle.model,
                type: vehicle.type,
                color: vehicle.color,
                year: vehicle.year,
                chassis: vehicle.chassis,
                insurance: vehicle.insurance
            }})
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const deleteOne = async (domain) =>
    database(async db => {
        try {
            return await db.collection(COLLECTION_NAME).deleteOne({domain})
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

export{
    findAll,
    createOne,
    findOne,
    editOne,
    deleteOne
}
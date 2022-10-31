import { database } from './database.js'

// TO-DO: SE MOVIO A VEHICULOS.SERVICE --> FIJARSE DE QUITAR DE ACÁ.
const getOneByPatente = async (patente, collection) =>
    database(async db => {
        try {
            const vehiculo = await db.collection(collection).findOne({patente})
            return vehiculo
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

const postVehiculo = async (vehiculo, collection) =>
database(async db => {
    try {
        const exist = await getOneByPatente(vehiculo.patente, collection)
        if(!exist) {
            await db.collection(collection).insertOne(vehiculo)
            return vehiculo
        } else {
            return null
        }
    } catch (error) {
        console.log(`Error: ${error}`)
    } 
})

export {
    getOneByPatente,
    postVehiculo
}
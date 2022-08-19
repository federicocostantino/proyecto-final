import { database } from './database.js'

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

const patchVehiculo = async (patente, vehiculo, collection) =>
    database(async db => {
        try {
            if(patente !== vehiculo.pat) {
                const exist = await getOneByPatente(vehiculo.pat, collection)
                if (!exist) {
                    await db.collection('servicios').updateMany({patente}, {$set: {
                        patente: vehiculo.pat,
                    }})
                    return await db.collection(collection).updateOne({patente}, {$set: {
                        patente: vehiculo.pat,
                        marca: vehiculo.marca,
                        modelo: vehiculo.modelo,
                        fabricacion: vehiculo.fabricacion,
                        color: vehiculo.color,
                        propietario: vehiculo.propietario,
                        km: vehiculo.km
                    }})
                } else {
                    return null
                }
            } else {
                return await db.collection(collection).updateOne({patente}, {$set: {
                    patente: vehiculo.pat,
                    marca: vehiculo.marca,
                    modelo: vehiculo.modelo,
                    fabricacion: vehiculo.fabricacion,
                    color: vehiculo.color,
                    propietario: vehiculo.propietario,
                    km: vehiculo.km
                }})
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })

export {
    getOneByPatente,
    postVehiculo,
    patchVehiculo,
}
import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function database (callback) {
    await client.connect()
    const db = client.db('esparta')
    const result = await callback(db)
    return result
}

export {
    database,
    ObjectId
}
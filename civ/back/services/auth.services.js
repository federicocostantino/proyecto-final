import { database } from "./Services/database.js"
import bcrypt from 'bcrypt'

const COLLECTION_NAME = 'Usuarios'

const create = async ({user, password}) => {
    return database(async db => {
        const userOld = await db.collection(COLLECTION_NAME).findOne({user})        
        if (!userOld) {
            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(password, salt)
            const userToCreate = { user, password: passwordHash }
            await db.collection(COLLECTION_NAME).insertOne(userToCreate)
            return userToCreate
        } else {
            throw new Error('User already exists.')
        }
    })
}

const login = async ({user, password}) => {
    return database(async db => {
        const userOld = await db.collection(COLLECTION_NAME).findOne({user})
        if (userOld) {
            const isPasswordValid = await bcrypt.compare(password, userOld.password)
            if(isPasswordValid) {
                return {user, password: undefined}
            }
        }
    })
}

export{
    create,
    login
}
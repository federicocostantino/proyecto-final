import { database } from "./Services/database.js"
import bcrypt from 'bcrypt'

const COLLECTION_NAME = 'Usuarios'

const create = async (user) => {
    return database(async db => {
        const userOld = await db.collection(COLLECTION_NAME).findOne({
            usuario: user.usuario
        })
        
        if(!userOld) {
            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(user.password, salt)
            const userToCreate = { ...user, password: passwordHash }
            await db.collection(COLLECTION_NAME).insertOne(userToCreate)
            return userToCreate
        } else {
            throw new Error('User already exists.')
        }
    })
}

const login = async (user) => {
    const { usuario, password} = {...user}
    return database(async db => {
        const usuarioExiste = await db.collection(COLLECTION_NAME).findOne({usuario})
        if(usuarioExiste) {
            const isPasswordValid = await bcrypt.compare(password, usuarioExiste.password)
            if(isPasswordValid) {
                return {...usuarioExiste, password: undefined}
            }
        }
    })
}

export{
    create,
    login
}
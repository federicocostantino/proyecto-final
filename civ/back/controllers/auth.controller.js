import jwt from 'jsonwebtoken'
import * as services from './../services/auth.services.js'

const create = (req, res) => {
    const user = req.body
    services.create(user)
        .then(user => {
            const token = jwt.sign({ id: user._id, usuario: user.usuario }, 'CLAVE_SECRETA')
            res.status(201).json({user, token})
        })
        .catch((error) => res.status(500).json({message: error.message}))
}

const login = (req, res) => {
    const user = req.body
    services.login(user)
        .then(user => {
            const token = jwt.sign({ id: user._id, usuario: user.usuario }, 'CLAVE_SECRETA')
            // res.header('auth-token', token).status(200).json(user)
            res.status(200).json({user, token})
        })
        .catch((error) => res.status(500).json({message: error.message}))
}

export {
    login,
    create
}
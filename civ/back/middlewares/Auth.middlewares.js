import jwt from 'jsonwebtoken'

const authorization = (req, res, next) => {
    try {
        const token = req.headers['auth-token'] || ''
        const user = jwt.verify(token, 'CLAVE_SECRETA')
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
}

export {
    authorization
}
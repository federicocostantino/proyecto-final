import express from 'express'
import { authorization } from '../middlewares/Auth.middlewares.js'
import * as controller from '../controllers/servicios.controller.js'

const router = express.Router();

router.all('*', authorization)

router.get('/', controller.findAll)
// router.get('/:patente', controller.verServiciosPorPatente)
// router.get('/:patente/:id', controller.verServicioPorId)
// router.post('', controller.nuevoServicio)
// router.patch('/editService/:id' , controller.editarServicio)
// router.patch('/endService', controller.endService)
// router.delete('/:patente', controller.eliminarServicio)

export default router
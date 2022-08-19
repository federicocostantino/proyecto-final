import express from 'express'
import { authorization } from '../middlewares/Auth.middlewares.js'
import * as serviciosController from '../controllers/servicios.controller.js'

const router = express.Router();

router.all('*', authorization)

router.get('/', serviciosController.verServicios)
router.get('/:patente', serviciosController.verServiciosPorPatente)
router.get('/:patente/:id', serviciosController.verServicioPorId)
router.post('', serviciosController.nuevoServicio)
router.patch('/:id' , serviciosController.editarServicio)
router.delete('/:patente', serviciosController.eliminarServicio)

export default router
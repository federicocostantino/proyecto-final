import express from 'express'
import { authorization } from '../middlewares/Auth.middlewares.js'
import * as controller from '../controllers/vehiculos.controller.js'

const router = express.Router();

router.all('*', authorization)

router.get('/', controller.verVehiculos)
router.get('/:patente', controller.verVehiculo)
router.post('/', controller.crearVehiculo)
router.patch('/:patente', controller.modificarUnVehiculo)
router.delete('/:patente', controller.eliminarVehiculo)

export default router
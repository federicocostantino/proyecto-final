import express from 'express'
import { authorization } from '../middlewares/Auth.middlewares.js'
import * as controller from '../controllers/vehiculos.controller.js'

const router = express.Router();

router.all('*', authorization)

router.get('/', controller.findAll) // TO-DO: Cambiar nombre del método.
router.get('/:domain', controller.findOne)
router.post('/', controller.createOne)
router.patch('/:domain', controller.editOne)
router.delete('/:domain', controller.deleteOne)

export default router
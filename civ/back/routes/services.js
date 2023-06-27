import express from 'express'
import { authorization } from '../middlewares/Auth.middlewares.js'
import * as controller from '../controllers/services.js'

const router = express.Router();

router.all('*', authorization)

router.get('/', controller.findAll)
router.get('/findOne/:id', controller.findOne)
router.get('/numberOfServices', controller.numberOfServices)
router.post('', controller.newService)
router.patch('/:id', controller.edit)

export default router
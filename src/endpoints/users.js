import { Router } from 'express'
import usersCtrl from '../controllers/usersCtrl'

const router = Router()

router.get('/', usersCtrl.listUsers)

export default router

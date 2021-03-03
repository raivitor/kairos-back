
import { Router } from 'express'
import recipesRoutes from './endpoints/users'

const routes = new Router()

routes.use('/Users', recipesRoutes)
export default routes

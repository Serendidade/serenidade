import { Router } from 'express'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'
import meditationsRouter from './meditations.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/meditations', meditationsRouter)

export default routes

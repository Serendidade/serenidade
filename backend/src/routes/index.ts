import { Router } from 'express'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'
import meditationsRouter from './meditations.routes'
import reflectionsRouter from './reflections.routes'
import myMeditationsRouter from './myMeditations.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/meditations', meditationsRouter)
routes.use('/reflections', reflectionsRouter)
routes.use('/mymeditations', myMeditationsRouter)

export default routes

import { Router } from 'express'
import usersRouter from './users.routes'
import sessionsRouter from './sessions.routes'
import meditationsRouter from './meditations.routes'
import reflectionsRouter from './reflections.routes'
import path from 'path'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/meditations', meditationsRouter)
routes.use('/reflections', reflectionsRouter)
routes.use('/audio', (request, response) => {
  // res.sendFile(path.join(__dirname
  response.sendFile(path.join(__dirname, '..', 'audio', 'meditacao.mp3'))
})
routes.use('/audio1', (request, response) => {
  // res.sendFile(path.join(__dirname
  response.sendFile(path.join(__dirname, '..', 'audio', 'fire.mp3'))
})
routes.use('/audio2', (request, response) => {
  // res.sendFile(path.join(__dirname
  response.sendFile(path.join(__dirname, '..', 'audio', 'forest.mp3'))
})
routes.use('/audio3', (request, response) => {
  // res.sendFile(path.join(__dirname
  response.sendFile(path.join(__dirname, '..', 'audio', 'ocean.mp3'))
})

routes.use('/audio', (request, response) => {
  // res.sendFile(path.join(__dirname
  response.sendFile(path.join(__dirname, '..', 'audio', 'waterfall.mp3'))
})

export default routes

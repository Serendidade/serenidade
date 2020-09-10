import { Router } from 'express'
import AuthenticationService from '../services/AuthenticationUserService'
import AuthenticationGoogleUserService from '../services/AuthenticationGoogleUserService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const authenticateUser = new AuthenticationService()

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  })

  delete user.password

  return response.json({ user, token })
})

sessionsRouter.post('/google', async (request, response) => {
  const { google_id, password } = request.body

  const authenticateGoogleUser = new AuthenticationGoogleUserService()

  const { user, token } = await authenticateGoogleUser.execute({
    google_id,
    password,
  })

  delete user.google_id
  delete user.password

  return response.json({ user, token })
})

export default sessionsRouter

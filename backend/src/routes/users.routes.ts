import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'
import CreateUserGoogleService from '../services/CreateUserGoogleService'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const createUser = new CreateUserService()

  const user = await createUser.execute({
    name,
    email,
    password,
  })

  delete user.password

  return response.json(user)
})

usersRouter.post('/google', async (request, response) => {
  const { name, email, password, google_id } = request.body

  const createUserGoogle = new CreateUserGoogleService()

  const user = await createUserGoogle.execute({
    name,
    email,
    password,
    google_id,
  })

  delete user.password
  delete user.google_id

  return response.json(user)
})

export default usersRouter

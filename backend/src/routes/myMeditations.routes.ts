import { Router } from 'express'
import CreateUserMeditationService from '../services/CreateUserMeditationService'
import ListUserMeditationService from '../services/ListUserMeditationService'
const myMeditationsRouter = Router()

myMeditationsRouter.post('/', async (req, res) => {
  const { user_id, meditation_id } = req.body
  const createUserMeditation = new CreateUserMeditationService()

  const userMeditation = await createUserMeditation.execute({
    user_id,
    meditation_id,
  })
  return res.json(userMeditation)
})

myMeditationsRouter.get('/', async (req, res) => {
  const { user_id } = req.body
  const listUserMeditation = new ListUserMeditationService()
  const meditationList = await listUserMeditation.execute({ user_id })

  return res.json(meditationList)
})

export default myMeditationsRouter

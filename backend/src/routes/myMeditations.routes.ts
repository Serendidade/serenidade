import { Router } from 'express'
import CreateUserMeditationService from '../services/CreateUserMeditationService'
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

export default myMeditationsRouter

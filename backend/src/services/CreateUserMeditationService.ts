import { getRepository } from 'typeorm'
import AppError from '../errors/Error'
import MyMeditation from '../models/MyMeditation'
import Meditation from '../models/Meditation'
import User from '../models/User'

interface Request {
  user_id: string
  meditation_id: number
}

class CreateUserMeditationService {
  public async execute({
    user_id,
    meditation_id,
  }: Request): Promise<MyMeditation> {
    const myMeditationsRepository = getRepository(MyMeditation)
    const meditationsRepository = getRepository(Meditation)
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ id: user_id })

    if (!user) {
      throw new AppError('User not found')
    }

    const meditation = await meditationsRepository.findOne({
      id: meditation_id,
    })

    if (!meditation) {
      throw new AppError('Meditation not found')
    }

    const existingMeditationRegister = await myMeditationsRepository.findOne({
      user: user_id,
      meditation: meditation_id,
    })

    if (existingMeditationRegister) {
      throw new AppError('Meditation already seen')
    }

    const seenMeditation = myMeditationsRepository.create({
      meditation: Number(meditation_id),
      user: user_id,
    })

    await myMeditationsRepository.save(seenMeditation)

    return seenMeditation
  }
}

export default CreateUserMeditationService

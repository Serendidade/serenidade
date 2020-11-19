import { getRepository } from 'typeorm'
import { validate } from 'class-validator'
import AppError from '../../errors/Error'
import Meditation from '../../models/Meditation'

interface Request {
  description: string
  path: string
  type: string
  guide: string
}

class CreateMeditationService {
  public async execute({
    description,
    path,
    type,
    guide,
  }: Request): Promise<Meditation> {
    const meditationsRepository = getRepository(Meditation)

    const checkMeditationExists = await meditationsRepository.findOne({
      where: { path },
    })

    if (checkMeditationExists) {
      throw new AppError('Meditation path already exists')
    }

    const meditation = meditationsRepository.create({
      description,
      type,
      path,
      guide,
    })
    const errors = await validate(meditation)

    if (errors.length > 0) {
      throw new AppError(`${errors}`)
    }

    await meditationsRepository.save(meditation)

    return meditation
  }
}

export default CreateMeditationService

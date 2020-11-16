import { getRepository } from 'typeorm'
import Meditation from '../models/Meditation'
import AppError from '../errors/Error'

class ShowMeditationService {
  public async execute(id: number): Promise<Meditation> {
    const meditationsRepository = getRepository(Meditation)

    const meditation = await meditationsRepository.findOne({
      where: `id = ${id}`,
    })

    if (!meditation) {
      throw new AppError('Meditation not found')
    }

    return meditation
  }
}

export default ShowMeditationService

import { getRepository } from 'typeorm'
import Meditation from '../models/Meditation'

class ShowMeditationService {
  public async execute(id: number): Promise<Meditation> {
    const meditationsRepository = getRepository(Meditation)

    const meditation = await meditationsRepository.findOneOrFail({
      where: `id = ${id}`,
    })

    return meditation
  }
}

export default ShowMeditationService

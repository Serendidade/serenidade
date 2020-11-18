import { getRepository } from 'typeorm'
import Meditation from '../../models/Meditation'

class ListMeditationService {
  public async execute(): Promise<Meditation[]> {
    const meditationsRepository = getRepository(Meditation)

    const meditation = await meditationsRepository.find()
    return meditation
  }
}

export default ListMeditationService

import { getRepository } from 'typeorm'
import Meditation from '../../models/Meditation'

class ListMeditationService {
  public async execute(q: string): Promise<Meditation[]> {
    const meditationsRepository = getRepository(Meditation)
    let meditation
    if (q) {
      meditation = await meditationsRepository.find({
        where: `type = "${q}"`,
      })
    } else {
      meditation = await meditationsRepository.find()
    }

    return meditation
  }
}

export default ListMeditationService

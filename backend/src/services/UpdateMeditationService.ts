import { getRepository } from 'typeorm'
import Meditation from '../models/Meditation'

interface Request {
  description: string
  guide: string
  type: string
  path: string
}
class UpdateMeditationService {
  public async execute({ id }: number): Promise<Meditation> {
    const meditationsRepository = getRepository(Meditation)
    const updatedMeditation = meditationsRepository.update(1, 'tala')

    return updatedMeditation
  }
}

export default UpdateMeditationService

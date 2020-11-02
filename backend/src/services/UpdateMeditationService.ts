import { createQueryBuilder, getRepository } from 'typeorm'
import Meditation from '../models/Meditation'

interface Request {
  description?: string
  guide?: string
  type?: string
  path?: string
}

class UpdateMeditationService {
  public async execute(
    { description, guide, type, path }: Request,
    id: string
  ): Promise<Meditation> {
    const meditationsRepository = getRepository(Meditation)

    await createQueryBuilder()
      .update(Meditation)
      .set({
        type,
        description,
        guide,
        path,
      })
      .where('id = :id', { id: id })
      .execute()

    const updatedMeditation = await meditationsRepository.findOneOrFail({
      where: `id = ${id}`,
    })
    return updatedMeditation
  }
}

export default UpdateMeditationService

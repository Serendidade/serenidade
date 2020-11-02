import { createQueryBuilder, getRepository } from 'typeorm'
import Meditation from '../models/Meditation'
import AppError from '../errors/Error'

interface Response {
  message: string
}

class DeleteMeditationService {
  public async execute(id: string): Promise<Response> {
    const meditationsRepo = getRepository(Meditation)

    try {
      const meditation = await meditationsRepo.findOne(id)

      if (!meditation) {
        throw new AppError('Meditation not found')
      }

      await createQueryBuilder()
        .delete()
        .from(Meditation)
        .where('id = :id', { id: id })
        .execute()

      return { message: 'Meditation deleted successfully' }
    } catch (error) {
      throw new AppError('Not able to delete selected meditation')
    }
  }
}

export default DeleteMeditationService

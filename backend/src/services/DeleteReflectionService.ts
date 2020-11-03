import { createQueryBuilder, getRepository } from 'typeorm'
import Reflection from '../models/Reflection'
import AppError from '../errors/Error'

interface Response {
  message: string
}

class DeleteReflectionService {
  public async execute(id: string): Promise<Response> {
    const reflectionsRepository = getRepository(Reflection)
    try {
      const reflection = await reflectionsRepository.findOne(id)
      if (!reflection) {
        throw new AppError('Reflection not found')
      }

      await createQueryBuilder()
        .delete()
        .from(Reflection)
        .where('id = :id', { id: id })
        .execute()

      return { message: 'Reflection deleted successfully' }
    } catch (error) {
      throw new AppError('Not able to delete selected reflection')
    }
  }
}

export default DeleteReflectionService

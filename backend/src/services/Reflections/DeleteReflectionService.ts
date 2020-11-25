import { createQueryBuilder, getRepository } from 'typeorm'
import Reflection from '../../models/Reflection'
import User from '../../models/User'
import AppError from '../../errors/Error'

interface Response {
  message: string
}

class DeleteReflectionService {
  public async execute(id: string, userId: string): Promise<Response> {
    const reflectionsRepository = getRepository(Reflection)
    const usersRepository = getRepository(User)
    const userFound = await usersRepository.findOne({ id: userId })

    if (!userFound) {
      throw new AppError('User not found')
    }

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

import { getRepository, createQueryBuilder } from 'typeorm'
import AppError from '../../errors/Error'

import Reflection from '../../models/Reflection'
import User from '../../models/User'

interface Request {
  content: string
  reflection_id: string
  userId: string
}

class UpdateReflectionService {
  public async execute({
    content,
    reflection_id,
    userId,
  }: Request): Promise<Reflection> {
    const reflectionsRepository = getRepository(Reflection)
    const usersRepository = getRepository(User)

    if (!content) {
      throw new AppError('Please type a content do be updated')
    }

    const userFound = await usersRepository.findOne({ id: userId })

    if (!userFound) {
      throw new AppError('User not found')
    }

    const reflection = await reflectionsRepository.findOne({
      where: { id: reflection_id, user: userId },
    })

    if (!reflection) {
      throw new AppError('Reflection not found')
    }

    await createQueryBuilder()
      .update(Reflection)
      .set({ content })
      .where('id = :id', { id: reflection_id })
      .execute()

    return reflection
  }
}

export default UpdateReflectionService

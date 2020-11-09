import { getRepository, createQueryBuilder } from 'typeorm'
import AppError from '../errors/Error'

import Reflection from '../models/Reflection'
import User from '../models/User'

interface Request {
  content: string
  reflection_id: string
  user_id: string
}

class UpdateReflectionService {
  public async execute({
    content,
    reflection_id,
    user_id,
  }: Request): Promise<Reflection> {
    const reflectionsRepository = getRepository(Reflection)
    const usersRepository = getRepository(User)

    const userFound = await usersRepository.findOne({ id: user_id })

    if (!userFound) {
      throw new AppError('User not found')
    }

    const reflection = await reflectionsRepository.findOne({
      where: { id: reflection_id, user: user_id },
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

import { getRepository } from 'typeorm'
import Reflection from '../../models/Reflection'
import User from '../../models/User'
import AppError from '../../errors/Error'

class ListReflectionService {
  public async execute(userId: string): Promise<Reflection[]> {
    const reflectionsRepository = getRepository(Reflection)
    const usersRepository = getRepository(User)
    const userFound = await usersRepository.findOne({ id: userId })

    if (!userFound) {
      throw new AppError('User not found')
    }

    const reflections = await reflectionsRepository.find({
      where: `userId = "${userId}"`,
    })

    return reflections
  }
}

export default ListReflectionService

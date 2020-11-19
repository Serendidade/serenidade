import { getRepository } from 'typeorm'
import { validate } from 'class-validator'

import AppError from '../../errors/Error'
import Reflection from '../../models/Reflection'
import User from '../../models/User'

interface Request {
  content: string
  user_id: string
}

class CreateReflectionService {
  public async execute({ content, user_id }: Request): Promise<Reflection> {
    const reflectionsRepository = getRepository(Reflection)
    const usersRepository = getRepository(User)

    const userFound = await usersRepository.findOne({ id: user_id })

    if (!userFound) {
      throw new AppError('User not found')
    }

    const reflection = reflectionsRepository.create({
      user: user_id,
      content,
    })

    const errors = await validate(reflection)

    if (errors.length > 0) {
      throw new AppError(`${errors}`)
    }

    await reflectionsRepository.save(reflection)

    return reflection
  }
}

export default CreateReflectionService

import { getRepository } from 'typeorm'
import AppError from '../errors/Error'
import Reflection from '../models/Reflection'

interface Request {
  content: string
  user_id: string
}

class CreateReflectionService {
  public async execute({ content, user_id }: Request): Promise<Reflection> {
    const reflectionsRepository = getRepository(Reflection)

    const reflection = reflectionsRepository.create({
      user: user_id,
      content,
    })

    await reflectionsRepository.save(reflection)

    return reflection
  }
}

export default CreateReflectionService

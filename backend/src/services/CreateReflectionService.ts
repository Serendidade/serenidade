import { getRepository } from 'typeorm'
import AppError from '../errors/Error'
import Reflection from '../models/Reflection'

interface Request {
  content: string
  id_user: string
}

class CreateReflectionService {
  public async execute({ content, id_user }: Request): Promise<Reflection> {
    const reflectionsRepository = getRepository(Reflection)

    const reflection = reflectionsRepository.create({
      user: id_user,
      content,
    })

    await reflectionsRepository.save(reflection)

    return reflection
  }
}

export default CreateReflectionService

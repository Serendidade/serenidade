import { getRepository } from 'typeorm'
import Reflection from '../models/Reflection'
import AppError from '../errors/Error'

class ShowReflectionService {
  public async execute(id: number): Promise<Reflection> {
    const reflectionsRepository = getRepository(Reflection)

    const reflection = await reflectionsRepository.findOne({
      where: `id = ${id}`,
    })

    if (!reflection) {
      throw new AppError('No reflection found')
    }

    return reflection
  }
}

export default ShowReflectionService

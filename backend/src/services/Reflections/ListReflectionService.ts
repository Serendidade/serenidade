import { getRepository } from 'typeorm'
import Reflection from '../../models/Reflection'

class ListReflectionService {
  public async execute(): Promise<Reflection[]> {
    const reflectionsRepository = getRepository(Reflection)

    const reflections = await reflectionsRepository.find()
    return reflections
  }
}

export default ListReflectionService

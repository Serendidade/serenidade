import { getRepository, createQueryBuilder } from 'typeorm'
import AppError from '../errors/Error'
import Reflection from '../models/Reflection'

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
    console.log(reflection_id)
    await createQueryBuilder()
      .update(Reflection)
      .set({ content })
      .where('id = :id', { id: reflection_id })
      .execute()

    const reflection = await reflectionsRepository.findOneOrFail({
      where: `id = ${reflection_id}`,
    })

    return reflection
  }
}

export default UpdateReflectionService

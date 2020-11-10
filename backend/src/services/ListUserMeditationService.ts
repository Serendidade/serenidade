import MyMeditation from '../models/MyMeditation'
import Meditation from '../models/Meditation'
import AppError from '../errors/Error'
import { createQueryBuilder, getRepository } from 'typeorm'

interface Request {
  user_id: string
}

class ListUserMeditationService {
  public async execute({ user_id }: Request): Promise<Meditation[]> {
    const usersMeditationRepository = getRepository(MyMeditation)
    const c = getRepository(Meditation)

    const d = await c.find()
    const med = await createQueryBuilder('meditations')
      .leftJoinAndSelect('meditations.id', 'meditations')
      .where('user.id = :id', { id: user_id })
      .getMany()

    console.log(med)
    if (!med) {
      throw new AppError('deus pai me ajuda')
    }
    return d
  }
}

export default ListUserMeditationService

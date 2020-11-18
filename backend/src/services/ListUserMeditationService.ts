import MyMeditation from '../models/MyMeditation'
import Meditation from '../models/Meditation'
import AppError from '../errors/Error'
import ListMeditationService from '../services/Meditations/ListMeditationService'
import { getManager } from 'typeorm'

interface Request {
  user_id: string
}

class ListUserMeditationService {
  public async execute({ user_id }: Request): Promise<Meditation[]> {
    const listMeditation = new ListMeditationService()
    const meditation = await listMeditation.execute()
    const entityManager = getManager()

    const userm = await entityManager.query(
      ` SELECT meditations.*
        FROM meditations, my_meditations, users
        WHERE my_meditations.userId = users.id
        AND my_meditations.meditationId = meditations.id`
    )

    return userm
  }
}

export default ListUserMeditationService

import { createQueryBuilder, getRepository } from 'typeorm'
import { validate } from 'class-validator'
import AppError from '../../errors/Error'
import Meditation from '../../models/Meditation'

interface Request {
  description: string
  guide: string
  type: string
  path: string
}

class UpdateMeditationService {
  public async execute(
    { description, guide, type, path }: Request,
    id: string
  ): Promise<Meditation> {
    const meditationsRepository = getRepository(Meditation)
    const meditation = await meditationsRepository.findOne({
      where: { id: id },
    })
    if (!meditation) {
      throw new AppError('Meditation not found')
    }
    /*
      meti um any, se ver isso tenta mudar o tipo do objeto e corrigir a linha de remoção de propriedade undefined, eh nois
    */
    const request: Request | any = {
      description: description,
      path: path,
      guide: guide,
      type: type,
    }

    Object.keys(request).forEach(
      key => request[key] === undefined && delete request[key]
    )

    const errors = await validate(request)

    if (errors.length > 0) {
      throw new AppError(`${errors}`)
    }

    await createQueryBuilder()
      .update(Meditation)
      .set(request)
      .where('id = :id', { id: id })
      .execute()

    return meditation
  }
}

export default UpdateMeditationService

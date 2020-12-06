import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import { v4 } from 'uuid'
import User from '../models/User'
import AppError from '../errors/Error'

interface Request {
  name: string
  email: string
  password: string
  google_id: string
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    google_id,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const checkUsersExists = await usersRepository.findOne({
      where: { google_id },
    })

    if (checkUsersExists) {
      throw new AppError('User from google aready exists')
    }

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      id: v4(),
      name,
      email,
      password: hashedPassword,
      google_id: google_id,
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService

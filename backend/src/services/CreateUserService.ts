import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import { v4 } from 'uuid'
import User from '../models/User'
import AppError from '../errors/Error'

interface Request {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const checkUsersExists = await usersRepository.findOne({
      where: { email },
    })

    if (checkUsersExists) {
      throw new AppError('Email aready in use')
    }

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      id: v4(),
      name,
      email,
      password: hashedPassword,
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService

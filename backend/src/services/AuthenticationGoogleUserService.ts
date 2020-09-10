import { getRepository } from 'typeorm'
import User from '../models/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import AppError from '../errors/Error'
import authConfig from '../config/auth'

interface Request {
  google_id: string
  password: string
}

interface Response {
  user: User
  token: string
}

class AuthenticationService {
  public async execute({ google_id, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: { google_id } })

    if (!user) {
      throw new AppError('Google SignIn Error', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Google SignIn Error', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    })

    return { user, token }
  }
}

export default AuthenticationService

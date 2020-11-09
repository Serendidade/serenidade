import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import { IsNotEmpty } from 'class-validator'

import User from './User'

@Entity('reflections')
class Reflection {
  @PrimaryGeneratedColumn()
  id: number

  @IsNotEmpty()
  @Column()
  content: string

  @ManyToOne(() => User, user => user.id)
  user: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Reflection

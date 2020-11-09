import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsNotEmpty } from 'class-validator'
@Entity('meditations')
class Meditation {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsNotEmpty()
  description: string

  @Column()
  @IsNotEmpty()
  type: string

  @Column()
  @IsNotEmpty()
  guide: string

  @Column()
  @IsNotEmpty()
  path: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Meditation

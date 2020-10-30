import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('meditations')
class Meditation {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @Column()
  type: string

  @Column()
  guide: string

  @Column()
  path: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Meditation

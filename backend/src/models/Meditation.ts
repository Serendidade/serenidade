import {
  Entity,
  Column,
  TableForeignKey,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('meditations')
class Meditation {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  type: string

  @Column()
  guide: string

  @Column()
  path: string

  @Column()
  google_id?: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Meditation

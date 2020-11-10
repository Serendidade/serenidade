import { Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm'
import Meditation from './Meditation'
import User from './User'

@Entity('my_meditations')
class MyMeditation {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => User, user => user.id)
  user: string

  @ManyToOne(() => Meditation, meditation => meditation.id)
  meditation: number
}

export default MyMeditation

import { Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm'
import Meditation from './Meditation'
import User from './User'

@Entity('my_meditations')
class MyMeditation {
  @PrimaryColumn()
  id: string

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'id_user' })
  user: string

  @ManyToOne(() => Meditation, meditation => meditation.id)
  @JoinColumn({ name: 'id_meditation' })
  meditation: number
}

export default MyMeditation

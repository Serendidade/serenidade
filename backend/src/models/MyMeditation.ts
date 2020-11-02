import { Entity, OneToOne, OneToMany, PrimaryColumn, JoinColumn } from 'typeorm'

import Meditation from './Meditation'
import User from './User'

@Entity('my_meditation')
class MyMeditation {
  @PrimaryColumn()
  id: string

  @OneToOne(() => User, user => user.id)
  @JoinColumn()
  id_user: User

  @OneToMany(() => Meditation, meditation => meditation.id)
  id_metitations: Meditation[]
}

export default MyMeditation

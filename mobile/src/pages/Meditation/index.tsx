import React from 'react'

import { Image } from 'react-native'
import api from '../../services/api'
import { player, play } from '../../services/player'

import {
  MeditationsList, Container, MeditationItem,
  MeditationText, MeditationContainer, MeditationTitle, MeditationIcon
} from './styles'

import dimensions from '../../global/dimensions'
import Card from '../../components/Card'
import Header from '../../components/Header'
import MeditationImage from '../../assets/img_sitted.png'
export interface DataInterface {
  id: string
  title: string
}

const Meditation: React.FC = ({ navigation }) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]

  return (
    <>
      <Header headerTitle="Minhas meditações" headerIcon="menu" execute={() => navigation.openDrawer()}/>
      <Container>
        <MeditationsList
          keyExtractor={(data) => data.id}
          data={DATA}
          renderItem={({ item }) =>
            <MeditationItem>
              <Card title={item.id} text={item.title}/>
              <MeditationIcon name="chevron-right" size={dimensions.icon} onPress={() => {
                player()
                play({
                  id: item.id,
                  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                  title: item.title,
                  artist: item.id,
                  artwork: 'https://img.ibxk.com.br/2019/07/09/09115359225032.jpg?w=1120&h=420&mode=crop&scale=both',
                })
              }}/>
            </MeditationItem>
          }
        />
      </Container>

    </>
  )
}

export default Meditation

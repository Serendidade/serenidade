import React, { useEffect, useState } from 'react'
import { Alert, Image, View } from 'react-native'
import api from '../../services/api'

import {
  MeditationsList,
  Container,
  MeditationItem,
  ChosenMeditationText,
  ChosenPlaylistCard,
  CardText,
  CardTitle
} from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'

import image from '../../assets/lotus_flower_sit.png'
export interface DataInterface {
  id: number
  title: string
  type: string
  path: string
  description: string
  guide: string

}

const Meditation: React.FC = ({ navigation, route }) => {
  const [meditations, setMeditations] = useState<DataInterface[]>([])

  useEffect(() => {
    async function loadMeditations ():Promise<void> {
      try {
        const res = await api.get(`/meditations?q=${route.params.type}`)
        const { data } = res
        setMeditations(data)
      } catch (error) {
        Alert.alert(error)
      }
    }

    loadMeditations()
  }, [route.params.type])

  return (
    <>
      <Header headerTitle="Caminho da Paz" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
      <Container>
        <ChosenMeditationText>
          Você escolheu a playlist
        </ChosenMeditationText>
        <ChosenPlaylistCard>
          <Image source={image} style={{ width: 100, height: 100, top: 16 }}/>
          <View style={{ flexDirection: 'column', top: 40, left: -8 }}>
            <CardTitle>{route.params.type}</CardTitle>
            <CardText>{meditations.length} Sessões</CardText>
          </View>
        </ChosenPlaylistCard>
        <ChosenMeditationText>
          Sessões
        </ChosenMeditationText>
        <MeditationsList
          keyExtractor={(item) => String(item.id)}
          data={meditations}
          renderItem={({ item }) =>
            <MeditationItem>
              <Card title={item.type} text="5 min" isPlaylistCard={false} execute={() => navigation.navigate('MeditationPlayer')}/>
            </MeditationItem>
          }
        />
      </Container>

    </>
  )
}

export default Meditation

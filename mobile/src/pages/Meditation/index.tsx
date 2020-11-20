import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import api from '../../services/api'

import {
  MeditationsList, Container, MeditationItem,
} from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
interface MeditationData {
  id: number
  title: string
  type: string
  path: string
  description: string
  guide: string
}

type MeditationParams = {
  Meditation: MeditationData
}

const Meditation: React.FC = () => {
  const route = useRoute<RouteProp<MeditationParams, 'Meditation'>>()
  const navigation = useNavigation()
  const [meditations, setMeditations] = useState<MeditationData[]>([])

  useEffect(() => {
    async function loadMeditations ():Promise<void> {
      try {
        const res = await api.get(`/meditations?q=${route.params.type}`)
        const { data } = res
        setMeditations(data)
        console.log(data)
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
        <MeditationsList
          keyExtractor={(item) => String(item.id)}
          data={meditations}
          renderItem={({ item }) =>
            <MeditationItem>
              <Card title={item.guide} text={item.description} isPlaylistCard={false} execute={() => {
                navigation.navigate('MeditationPlayer', { item })
              }}/>
            </MeditationItem>
          }
        />
      </Container>

    </>
  )
}

export default Meditation

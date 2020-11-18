import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import api from '../../services/api'

import {
  MeditationsList, Container, MeditationItem,
} from './styles'

import Card from '../../components/Card'
import Header from '../../components/Header'

export interface DataInterface {
  id: number
  title: string
  type: string
  path: string
  description: string

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
  }, [])

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
      <Header headerTitle="Caminho da Paz" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
      <Container>
        <MeditationsList
          keyExtractor={(data) => data.id}
          data={DATA}
          renderItem={({ item }) =>
            <MeditationItem>
              <Card title={item.id} text={item.title} isPlaylistCard={false} execute={() => navigation.navigate('MeditationPlayer')}/>
            </MeditationItem>
          }
        />
      </Container>

    </>
  )
}

export default Meditation

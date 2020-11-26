import React, { useEffect, useState, } from 'react'
import { Alert, Image, View, ActivityIndicator, ScrollView } from 'react-native'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import api from '../../services/api'

import Card from '../../components/Card'
import Header from '../../components/Header'

import {
  CardText,
  CardTitle,
  ChosenMeditationText,
  ChosenPlaylistCard,
  Container,
  MeditationsList
} from './styles'

import image from '../../assets/lotus_flower_sit.png'

 interface MeditationData {
  id: number
  title: string
  type: string
  path: string
  description: string
  guide: string
  duration: string
}

type MeditationParams = {
  Meditation: MeditationData
}

const Meditation: React.FC = () => {
  const route = useRoute<RouteProp<MeditationParams, 'Meditation'>>()
  const navigation = useNavigation()
  const [meditations, setMeditations] = useState<MeditationData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadMeditations ():Promise<void> {
      try {
        const res = await api.get(`/meditations?q=${route.params.type}`)
        const { data } = res
        setMeditations(data)
        setLoading(false)
      } catch (error) {
        Alert.alert(error)
      }
    }

    loadMeditations()

    return () => {
      setMeditations([])
      setLoading(false)
    }
  }, [])

  return (
    <>
      <Header headerTitle={route.params.type} headerIcon="menu" />
      {!loading
        ? <Container>
          <ChosenMeditationText>
    Você escolheu a playlist
          </ChosenMeditationText>
          <ChosenPlaylistCard style ={{ elevation: 3 }}>
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
              <Card title={item.title} text={item.duration} isPlaylistCard={false} execute={() => {
                navigation.navigate('MeditationPlayer', { item })
              }}/>
            }
          />
        </Container>
        : <ActivityIndicator/>
      }
    </>
  )
}

export default Meditation

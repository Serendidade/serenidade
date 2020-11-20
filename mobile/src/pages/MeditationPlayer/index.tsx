
import React, { useEffect, useState, useCallback } from 'react'
import Header from '../../components/Header'
import { Container, Title, Text, PlayerIcon, WrapContainer } from './styles'
import { player, play, pause } from '../../services/player'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Track } from 'react-native-track-player'

interface Meditation {
  id: number
  title: string
  type: string
  path: string
  description: string
  guide: string
}

type MeditationParams = {
  Track : {
    item: Meditation
  }
}

const MeditationPlayer: React.FC = () => {
  const route = useRoute<RouteProp<MeditationParams, 'Track'>>()
  const navigation = useNavigation()
  const [track, setTrack] = useState<Track>({ id: '1', title: '2', artist: '2', url: '2' })
  const [isPlaying, setPlaying] = useState<Boolean>(false)

  const { item } = route.params

  useEffect(() => {
    setTrack({
      id: item.id.toString(),
      title: item.title,
      artist: item.guide,
      url: item.path,
      album: item.type,
      contentType: item.type,
      description: item.description,
      artwork: 'https://thumbs.dreamstime.com/b/amazing-cartoon-girl-yoga-lotus-practices-meditation-amazing-cartoon-girl-yoga-lotus-practices-meditation-practice-yoga-199094522.jpg'
    })
  }, [])

  return (
    <>
      <Header headerTitle={'Trilhando a paz'} headerIcon="arrow-left" execute={() => navigation.goBack()}/>

      <WrapContainer>
        <Container>
          <Title>Quem é o guia?</Title>
          <Text>{track?.artist}</Text>
        </Container>

        <Container>
          <Title>Você está ouvindo</Title>
          <Text>{track.contentType}</Text>
        </Container>

        <Container>
          {!isPlaying
            ? <PlayerIcon name='play' size={100} onPress={() => {
              player()
              play(track)
              setPlaying(true)
            }}/>
            : <PlayerIcon name='pause' size={100} onPress={() => {
              pause()
              setPlaying(false)
            }}/>
          }
        </Container>
      </WrapContainer>
    </>
  )
}

export default MeditationPlayer

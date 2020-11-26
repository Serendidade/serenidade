
import React, { useEffect, useState, useCallback, } from 'react'
import Header from '../../components/Header'
import { Container, Title, Text, PlayerIcon, WrapContainer } from './styles'
import { player, play, pause, currentState, ISPAUSED, ISSTOPPED, ISPLAYING } from '../../services/player'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import TrackPlayer, { PITCH_ALGORITHM_MUSIC, Track } from 'react-native-track-player'

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
      pitchAlgorithm: PITCH_ALGORITHM_MUSIC,
      id: item.id.toString(),
      title: item.description,
      artist: item.guide,
      url: item.path,
      album: item.type,
      contentType: item.type,
      description: item.description,
      artwork: 'https://thumbs.dreamstime.com/b/amazing-cartoon-girl-yoga-lotus-practices-meditation-amazing-cartoon-girl-yoga-lotus-practices-meditation-practice-yoga-199094522.jpg'
    })
  }, [item])

  const checkState = useCallback(() => {
    async () => {
      await currentState() === ISPLAYING

      if (await currentState() === (ISPAUSED || ISSTOPPED)) setPlaying(false)
      else setPlaying(true)
    }

    return function cleanup () {
      setPlaying(false)
    }
  }, [])

  useEffect(() => {
    console.log('Updated trackplayer')
    TrackPlayer.addEventListener('remote-pause', () => setPlaying(false))
    TrackPlayer.addEventListener('remote-stop', () => setPlaying(false))

    return function cleanup () {
      TrackPlayer.destroy()
    }
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
          <Text>{track?.description}</Text>
        </Container>

        <Container>
          {checkState()}
          {!isPlaying
            ? <PlayerIcon name='play' size={100} onPress={() => {
              player()
              play(track)
              setPlaying(true)
              currentState()
            }}/>
            : <PlayerIcon name='pause' size={100} onPress={() => {
              pause()
              setPlaying(false)
              currentState()
            }}/>
          }
        </Container>
      </WrapContainer>
    </>
  )
}

export default MeditationPlayer

import React, { useEffect, useState, } from 'react'
import { Alert } from 'react-native'
import { Container, Playlist, PlaylistItem } from './styles'
import Header from '../../components/Header'
import Card from '../../components/Card'
import api from '../../services/api'

export interface DataInterface {
  id: number
  title: string
  type: string
  path: string
  description: string
  guide: string

}

function parseMeditations (arr:DataInterface[]):DataInterface[] {
  const types = arr.map(item => item.type)
  const parsedMeditation = arr.filter(({ type }, index) => !types.includes(type, index + 1))
  return parsedMeditation
}

const MeditationPlaylist: React.FC = ({ navigation }) => {
  const [meditations, setMeditations] = useState<DataInterface[]>([])

  useEffect(() => {
    async function loadMeditations ():Promise<void> {
      try {
        const res = await api.get('/meditations')
        const { data } = res
        const parsedMeditations = parseMeditations(data)
        setMeditations(parsedMeditations)
      } catch (error) {
        Alert.alert(error)
      }
    }

    loadMeditations()
  }, [])

  return (
    <>
      <Header headerTitle="Minhas meditações" headerIcon="menu" execute={() => navigation.openDrawer()}/>
      <Container>
        <Playlist
          keyExtractor={(item) => String(item.id)}
          data={meditations}
          renderItem={({ item }) =>
            <PlaylistItem>
              <Card title={item.type} text={item.guide} isPlaylistCard execute={() => navigation.navigate('Meditation', { type: item.type, })}/>
            </PlaylistItem>
          }
        />
      </Container>
    </>
  )
}

export default MeditationPlaylist

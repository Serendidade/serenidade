
import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { ScrollView, FlatList, Alert, Text } from 'react-native'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { useAuth } from '../../hooks/auth'
import Header from '../../components/Header'
import ReflectionCard from '../../components/ReflectionCard'

import api from '../../services/api'

import { Container, AddReflectionCard, Wrap, CardText, CardIcon } from './styles'

interface ReflectionData {
  content: string
  created_at: Date
  id: number
}

const Reflection: React.FC = () => {
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [reflections, setReflections] = useState<ReflectionData[]>([])
  const { user } = useAuth()
  const { id } = user

  useEffect(() => {
    async function loadReflections ():Promise<void> {
      try {
        const res = await api.post('reflections/index', { userId: id })
        const parsedReflection = res.data.map(item => {
          const parsedDate = parseISO(item.created_at)
          const formattedDate = format(parsedDate, "dd 'de' MMMM, ")
        })
        setReflections(res.data)
      } catch (error) {
        Alert.alert(error)
      }
    }
    loadReflections()

    return function cleanup () {
      setReflections([])
    }
  }, [isFocused])

  async function handleDeleteReflection (reflectionId:number):Promise<void> {
    try {
      await api.post(`reflections/delete/${reflectionId}`, { userId: id })
      const filteredReflections = reflections.filter(item => item.id !== reflectionId)
      setReflections(filteredReflections)
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <>
      <Header headerTitle="Reflexões" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
      <AddReflectionCard onPress={() => navigation.navigate('DetailReflection', { item: null }) }>
        <CardText>
          O que te fez sentir gratidão hoje
        </CardText>
        <CardIcon name="plus" size={30}/>
      </AddReflectionCard>
      {reflections.length > 0
        ? <ScrollView style={{ backgroundColor: '#E7EFFF' }} horizontal={false}>

          <Wrap style={{ elevation: 3 }}>
            <Container>
              <FlatList keyExtractor={item => String(item.id)}
                data={reflections}
                renderItem={({ item }) => (
                  <ReflectionCard
                    executeDelete={handleDeleteReflection}
                    item={item}
                  />
                )}
              />
            </Container>
          </Wrap>
        </ScrollView>
        : null
      }
    </>
  )
}

export default Reflection

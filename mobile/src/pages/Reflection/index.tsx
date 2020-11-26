
import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { SafeAreaView, FlatList, Alert, View } from 'react-native'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { useAuth } from '../../hooks/auth'
import Header from '../../components/Header'
import ReflectionCard from '../../components/ReflectionCard'

import api from '../../services/api'

import { Container, AddReflectionCard, Wrap, CardText, CardIcon } from './styles'

interface ReflectionData {
  content: string
  formattedDate: Date
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
        const parsedReflections = res.data.map(item => {
          const parsedDate = parseISO(item.created_at)
          const formattedDate = format(parsedDate, "dd 'de' MMMM yyyy", { locale: pt })

          return {
            formattedDate,
            ...item
          }
        })
        setReflections(parsedReflections)
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
        ? <SafeAreaView style={{ backgroundColor: '#E7EFFF', flex: 1 }}>

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
        </SafeAreaView>
        : null
      }
    </>
  )
}

export default Reflection

import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, FlatList, Alert } from 'react-native'

import { format, parseIso } from 'date-fns'

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
  const [reflections, setReflections] = useState<ReflectionData[]>([])

  useEffect(() => {
    async function loadReflections ():Promise<void> {
      try {
        const res = await api.get('reflections')
        setReflections(res.data)
      } catch (error) {
        Alert.alert(error)
      }
    }

    loadReflections()
  }, [])

  function handleUpdateReflection ({ item }: ReflectionData):void {
    navigation.navigate('DetailReflection')
  }

  function handleDeleteReflection ():void {
    console.log('del')
  }
  return (
    <>
      <Header headerTitle="Reflexões" headerIcon="arrow-left" execute={() => navigation.goBack()}/>

      <ScrollView style={{ backgroundColor: '#E7EFFF' }} horizontal={false}>
        <AddReflectionCard onPress={() => navigation.navigate('DetailReflection', { item: null }) }>
          <CardText>
          O que te fez sentir gratidão hoje
          </CardText>
          <CardIcon name="plus" size={30}/>
        </AddReflectionCard>

        <Wrap style={{ elevation: 3 }}>
          <Container>
            <FlatList keyExtractor={item => String(item.id)}
              data={reflections}
              renderItem={({ item }) => (
                <ReflectionCard
                  executeDelete={handleDeleteReflection}
                  executeUpdate={handleUpdateReflection}
                  item={item}
                />
              )}
            />
          </Container>
        </Wrap>
      </ScrollView>
    </>
  )
}

export default Reflection

import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, FlatList, Alert } from 'react-native'

import Header from '../../components/Header'
import ReflectionCard from '../../components/ReflectionCard'
import colors from '../../global/colors'

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

  function handleUpdateReflection ({ content, id, created_at }: ReflectionData):void {
    navigation.navigate('DetailReflection', { content, id, created_at })
  }

  function handleDeleteReflection ():void {
    console.log('del')
  }
  return (
    <>
      <Header headerTitle="Reflexões" headerIcon="arrow-left" execute={() => navigation.goBack()}/>

      <ScrollView style={{ backgroundColor: '#e7e0ef' }}>
        <AddReflectionCard onPress={() => navigation.navigate('DetailReflection') }>
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
                <>
                  <ReflectionCard text={String(item.created_at)} isDateCard cardColor ={colors.secondaryColor} />
                  <ReflectionCard
                    text={item.content}
                    isDateCard={false}
                    cardColor={colors.spectres.grey[3]}
                    iconName="dots-vertical"
                    executeDelete={() => handleDeleteReflection}
                    executeUpdate={handleUpdateReflection}
                    item={item}
                  />
                </>
              )}
            />
          </Container>
        </Wrap>
      </ScrollView>
    </>
  )
}

export default Reflection

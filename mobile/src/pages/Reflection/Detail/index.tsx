import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import { useNavigation, } from '@react-navigation/native'

import api from '../../../services/api'
import { useAuth } from '../../../hooks/auth'

import Header from '../../../components/Header'

import { Container, ContentInput, ReflectionSaveButton } from './styles'

const Detail: React.FC = ({ route }) => {
  const [content, setContent] = useState('')
  const [reflectionId, setReflectionId] = useState('')
  const navigation = useNavigation()
  const { user } = useAuth()
  const { id } = user

  useEffect(() => {
    if (route.params.content !== null) {
      setContent(route.params.content)
      setReflectionId(route.params.id)
    }

    return function cleanup () {
      setReflectionId('')
      setContent('')
    }
  }, [])

  async function handleSaveReflection ():Promise<void> {
    try {
      if (reflectionId) {
        const res = await api.post(`reflections/update/${reflectionId}`, { userId: id, content: content })
        console.log(res)
      } else {
        await api.post('reflections', { userId: id, content: content })
        navigation.goBack()
      }
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <>
      <Header headerTitle="Escreva sua reflexão" headerIcon="arrow-left" execute={() => navigation.goBack()}/>

      <Container>
        <ContentInput
          onChangeText={text => setContent(text)}
          placeholderTextColor="#7159c1"
          placeholder="Sou grato(a) por..."
          defaultValue={content}
          style={{ textAlignVertical: 'top', }}
          multiline={true}
        />
        <ReflectionSaveButton onPress={() => handleSaveReflection()}>
          Salvar reflexão
        </ReflectionSaveButton>
      </Container>

    </>
  )
}

export default Detail

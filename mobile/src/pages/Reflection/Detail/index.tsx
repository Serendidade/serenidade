import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../../../components/Header'
import { Container, ContentInput, ReflectionSaveButton } from './styles'

interface ReflectionData {
  content: string
  id: number
}

const Detail: React.FC = ({ route }) => {
  const [content, setContent] = useState('')
  const [id, setId] = useState(0)
  const navigation = useNavigation()

  useEffect(() => {
    if (route.params.content !== null) {
      setContent(route.params.content)
      setId(route.params.id)
    }
  }, [])

  return (
    <View style={{ backgroundColor: '#E7EFFF' }}>
      <Header headerTitle="Escreva sua reflexão" headerIcon="arrow-left" execute={() => navigation.goBack()}/>

      <Container>
        <ContentInput
          onChangeText={text => setContent(text)}
          placeholder="Sou grato(a) por..."
          defaultValue={content}
          style={{ textAlignVertical: 'top', }}
          multiline={true}
        />
        <ReflectionSaveButton>
          Salvar
        </ReflectionSaveButton>
      </Container>
    </View>
  )
}

export default Detail

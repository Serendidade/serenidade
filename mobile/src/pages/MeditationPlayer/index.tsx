import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import { Container, GuideContainer, CurrentMeditationContainer } from './styles'

const MeditationPlayer: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Header headerTitle="Trilhando a paz" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
      <TouchableOpacity >
        <GuideContainer>
          <Text>Quem é o guia?</Text>
          <Text>Tdashi Kadamoto</Text>
        </GuideContainer>

        <CurrentMeditationContainer>
          <Text>Você está ouvindo</Text>
          <Text>Primeiro passo</Text>
        </CurrentMeditationContainer>

      </TouchableOpacity>
    </Container>
  )
}

export default MeditationPlayer

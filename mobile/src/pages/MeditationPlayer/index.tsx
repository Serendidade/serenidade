import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import { Container, GuideContainer, CurrentMeditationContainer, GuideText, GuideTitle, CurrentMeditationText, CurrentMeditationTitle } from './styles'

const MeditationPlayer: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Header headerTitle="Trilhando a paz" headerIcon="arrow-left" execute={() => navigation.goBack()}/>
      <TouchableOpacity >
        <GuideContainer>
          <GuideTitle>Quem é o guia?</GuideTitle>
          <GuideText>Tdashi Kadamoto</GuideText>
        </GuideContainer>

        <CurrentMeditationContainer>
          <CurrentMeditationTitle>Você está ouvindo</CurrentMeditationTitle>
          <CurrentMeditationText>Primeiro passo</CurrentMeditationText>
        </CurrentMeditationContainer>

      </TouchableOpacity>
    </Container>
  )
}

export default MeditationPlayer

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Phrase } from './styles'
import { ScrollView, Image } from 'react-native'

import ImgStretching from '../../assets/img_stretching.png'
import dimensions from '../../global/dimensions'
import Button from '../../components/Button'
import Header from '../../components/Header'

const GetStarted: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <Header headerTitle="Trilhando a felicidade" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Image source={ImgStretching} style={{ width: dimensions.image, height: dimensions.image }}/>
        </Container>
        <Container>
          <Phrase>“Na meditação profunda: o conhecedor, o conhecimento e o conhecido se tornam um.”  – Iyengar</Phrase>
        </Container>
      </ScrollView>
      <Container>
        <Button onPress={() => {
          navigation.navigate('GetStartedHeadset')
        }}>
            Continuar
        </Button>
      </Container>
    </>
  )
}

export default GetStarted

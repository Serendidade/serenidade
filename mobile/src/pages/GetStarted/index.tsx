import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderContainer, HeaderTitle, Container, Phrase } from './styles'
import { ScrollView, Image } from 'react-native'

import ImgStretching from '../../assets/img_stretching.png'
import dimensions from '../../global/dimensions'
import Button from '../../components/Button'

const GetStarted: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <HeaderContainer style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3.84, elevation: 8 }}>
        <HeaderTitle>Trilhando a felicidade</HeaderTitle>
      </HeaderContainer>

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

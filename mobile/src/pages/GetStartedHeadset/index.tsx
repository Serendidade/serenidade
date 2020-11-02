import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderContainer, HeaderTitle, Container, Phrase } from './styles'
import { ScrollView, Image } from 'react-native'

import ImgHeadset from '../../assets/img_headset.png'
import dimensions from '../../global/dimensions'
import Button from '../../components/Button'

const GetStartedHeadset: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <HeaderContainer style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3.84, elevation: 8 }}>
        <HeaderTitle>Trilhando a felicidade</HeaderTitle>
      </HeaderContainer>

      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Image source={ImgHeadset} style={{ width: dimensions.image, height: dimensions.image }}/>
        </Container>
        <Container>
          <Phrase>Utilize fones de ouvidos para maior imersao.</Phrase>
        </Container>
      </ScrollView>
      <Container>
        <Button onPress={() => {
          navigation.navigate('Welcome')
        }}>
            Continuar
        </Button>
      </Container>
    </>
  )
}

export default GetStartedHeadset

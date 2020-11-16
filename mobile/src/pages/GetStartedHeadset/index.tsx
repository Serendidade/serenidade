import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Phrase } from './styles'
import { ScrollView, Image } from 'react-native'

import ImgHeadset from '../../assets/img_headset.png'
import dimensions from '../../global/dimensions'
import Button from '../../components/Button'
import Header from '../../components/Header'

const GetStartedHeadset: React.FC = () => {
  const navigation = useNavigation()

  return (
    <>
      <Header headerTitle="Trilhando a felicidade" />

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

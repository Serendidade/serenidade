import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Phrase } from './styles'
import { ScrollView, Image, View } from 'react-native'

import ImgHeadset from '../../assets/img_headset.png'
import dimensions from '../../global/dimensions'
import Button from '../../components/Button'
import Header from '../../components/Header'

import { setFirstAccess } from '../../utils/firstAccess'

const GetStartedHeadset: React.FC = () => {
  const checkFirstAccess = useCallback(async () => {
    await setFirstAccess()
  }, [])

  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: '#e7efff' }}>
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
          checkFirstAccess()
        }}>
            Continuar
        </Button>
      </Container>
    </View>
  )
}

export default GetStartedHeadset

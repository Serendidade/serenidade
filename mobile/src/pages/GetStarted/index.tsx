import React, { useCallback, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Phrase } from './styles'
import { ScrollView, Image, View } from 'react-native'

import ImgStretching from '../../assets/img_stretching.png'
import dimensions from '../../global/dimensions'
import Button from '../../components/Button'
import Header from '../../components/Header'

import { isFirstAccess } from '../../utils/firstAccess'
import { resetRoutes } from '../../utils/routing'

const GetStarted: React.FC = () => {
  const navigation = useNavigation()

  const checkFirstAccess = useCallback(async () => {
    const response = await isFirstAccess()
    if (response) {
      navigation.dispatch((state) => resetRoutes('Welcome', state))
    }
  }, [navigation])

  useLayoutEffect(() => {
    checkFirstAccess()
  }, [checkFirstAccess])

  return (
    <View style={{ backgroundColor: '#e7efff', flex: 1 }}>
      <Header headerTitle="Trilhando a felicidade" />
      <ScrollView keyboardShouldPersistTaps="handled" style={{ backgroundColor: '#e7efff' }}>
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
    </View>
  )
}

export default GetStarted

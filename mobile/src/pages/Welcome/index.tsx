import React, { useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { GoogleSignin } from '@react-native-community/google-signin'
import { GOOGLE_WEBCLIENT_ID } from '@env'
import { useAuth } from '../../hooks/auth'

import colors from '../../global/colors'
import dimensions from '../../global/dimensions'
import { Container, Title, Button, ButtonText, ButtonContainer, ButtonIcon } from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation()
  const { signIn, user } = useAuth()

  useEffect(() => {
    GoogleSignin.configure({ webClientId: GOOGLE_WEBCLIENT_ID })
  }, [])

  const handleSignIn = useCallback(async () => {
    if (user) {
      navigation.navigate('Meditation')
    } else {
      navigation.navigate('SignIn')
    }
  }, [signIn])

  return (
    <View style={{
      backgroundColor: colors.primatyAccentColor,
      height: '100%',
    }}>

      <Container>
        <Title>Ja possui uma conta?</Title>

        <ButtonContainer >
          <ButtonIcon name="login" size={dimensions.icon} onPress={() => navigation.navigate('SignIn')}/>
          <Button onPress={() => handleSignIn()}>
            <ButtonText>Quero acessar</ButtonText>
          </Button>
        </ButtonContainer>

        <Title>Ainda não tem?</Title>

        <ButtonContainer>
          <ButtonIcon name="account-plus-outline" size={dimensions.icon} />
          <Button onPress={() => navigation.navigate('SignUp')}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
        </ButtonContainer>
      </Container>
    </View>
  )
}

export default Welcome

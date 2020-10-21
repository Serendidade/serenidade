import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { GoogleSignin } from '@react-native-community/google-signin'
import { GOOGLE_WEBCLIENT_ID } from '@env'

import colors from '../../global/colors'
import { Container, Title, Button, ButtonText, ButtonContainer, ButtonIcon } from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    GoogleSignin.configure({ webClientId: GOOGLE_WEBCLIENT_ID })
  }, [])

  return (
    <View style={{
      backgroundColor: colors.primatyAccentColor,
      height: '100%',
    }}>

      <Container>
        <Title>Ja possui uma conta?</Title>

        <ButtonContainer >
          <ButtonIcon name="login" size={28} onPress={() => navigation.navigate('SignIn')}/>
          <Button onPress={() => navigation.navigate('SignIn')}>
            <ButtonText>Quero acessar</ButtonText>
          </Button>
        </ButtonContainer>

        <Title>Ainda não tem?</Title>

        <ButtonContainer>
          <ButtonIcon name="account-plus-outline" size={28} />
          <Button onPress={() => navigation.navigate('SignUp')}>
            <ButtonText>Criar conta</ButtonText>
          </Button>
        </ButtonContainer>
      </Container>
    </View>
  )
}

export default Welcome

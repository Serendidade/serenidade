import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Container, ContainerPhrases, Title, SubTitle, SignInButton, SignUpButton, ButtonText } from './styles'
import { useNavigation } from '@react-navigation/core'
import { GoogleSignin } from '@react-native-community/google-signin'

import { GOOGLE_WEBCLIENT_ID } from '@env'
import colors from '../../global/colors'
import i18n from '../../i18n/texts'

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    GoogleSignin.configure({ webClientId: GOOGLE_WEBCLIENT_ID })
  }, [])

  return (
    <View style={{
      backgroundColor: colors.primaryColor,
      height: '100%',
    }}>

      <ContainerPhrases>
        <Title>{i18n.greetings}</Title>
        <SubTitle>{i18n.sub_greetings}</SubTitle>
      </ContainerPhrases>

      <Container>

        <Title>Já tem uma conta?</Title>
        <SignInButton onPress={() => { navigation.navigate('SignIn') }}>
          <ButtonText>Entrar</ButtonText>
        </SignInButton>

        <Title>Ainda não?</Title>
        <SignUpButton>
          <ButtonText onPress={() => { navigation.navigate('SignUp') }}>Criar nova conta</ButtonText>
        </SignUpButton>
      </Container>
    </View>
  )
}

export default Welcome

import React from 'react'
import { View } from 'react-native'
import { Container, ContainerPhrases, Title, SubTitle, SignInButton, SignUpButton, ButtonText, ContainerSocialLogin } from './styles'
import { useNavigation } from '@react-navigation/core'
import { GoogleSigninButton } from '@react-native-community/google-signin'

import colors from '../../global/colors'
import i18n from '../../i18n/texts'

const Welcome: React.FC = () => {
  const navigation = useNavigation()
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
      <ContainerSocialLogin>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
        />
      </ContainerSocialLogin>
    </View>
  )
}

export default Welcome

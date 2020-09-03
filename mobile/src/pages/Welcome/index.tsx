import React from 'react'
import { View } from 'react-native'
import { Container, ContainerPhrases, Title, SubTitle, SignInButton, SignUpButton, ButtonText } from './styles'

import colors from '../../global/colors'
import i18n from '../../i18n/texts'

const Welcome: React.FC = () => {
  return (
    <View style={{
      backgroundColor: colors.primaryColor,
      height: '100%',
    }}>

      <ContainerPhrases>
        <Title>{i18n.greetings}</Title>
        <SubTitle>{i18n.sub_greetings}</SubTitle>
      </ContainerPhrases>
      <View/>
      <Container>
        <Title>Já tem uma conta?</Title>
        <SignInButton>
          <ButtonText>Entrar</ButtonText>
        </SignInButton>

        <Title>Ainda não?</Title>
        <SignUpButton>
          <ButtonText>Criar nova conta</ButtonText>
        </SignUpButton>
      </Container>
    </View>
  )
}

export default Welcome

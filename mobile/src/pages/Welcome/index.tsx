import React from 'react'
import { View } from 'react-native'
import { Container, ContainerPhrases, Title, SubTitle, SignInButton, SignUpButton, ButtonText, ImageFlowerSit } from './styles'
import { useNavigation } from '@react-navigation/core'

import colors from '../../global/colors'
import i18n from '../../i18n/texts'
import logo from '../../assets/lotus_flower_sit.png'

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

      <ImageFlowerSit source={logo} />

      <Container>
        <Title>Já tem uma conta?</Title>
        <SignInButton onPress={() => { navigation.navigate('SignIn') }}>
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

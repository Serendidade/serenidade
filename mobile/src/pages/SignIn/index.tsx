import React from 'react'
import { View } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, Title, Label } from './styles'

const SignIn: React.FC = () => {
  return (
    <>
      <View />

      <Container>
        <Title>Informe seu login para continuar</Title>

        <Label>E-mail</Label>
        <Input/>

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>
      </Container>

    </>
  )
}

export default SignIn

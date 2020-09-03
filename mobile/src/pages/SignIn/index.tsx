import React, { useRef, useCallback } from 'react'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, Title, Label, ImageFlowerSit } from './styles'
import logo from '../../assets/lotus_flower_sit.png'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  }, [])

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled">

          <Container>
            <ImageFlowerSit source={logo} />
            <Title>Informe seu login para continuar</Title>

            <Form ref={formRef} onSubmit={handleSignIn} style={{ width: '100%' }}>
              <Label>E-mail</Label>
              <Input
                icon="mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
                name="email"
              />

              <Label>Senha</Label>
              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
                name="password"
                icon="lock"
              />

            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm()
              }}
            >Entrar</Button>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignIn

import React, { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/auth'
import Button from '../../components/Button'
import Input from '../../components/Input'
import logo from '../../assets/lotus_flower_sit.png'
import getValidationErrors from '../../utils/getValidationError'

import { Container, Title, Label, ImageFlowerSit } from './styles'
import Icon from '../../components/Icon'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const { signIn, user } = useAuth()

  const navigation = useNavigation()

  console.log(user)

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      await signIn({
        email: data.email,
        password: data.password,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        console.log(errors)

        formRef.current?.setErrors(errors)

        return
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.'
      )
    }
  }, [signIn])

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled">
          <Icon name="arrow-left-right-line" size={24} onPress={() => { navigation.goBack() }}/>
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

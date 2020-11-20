import React, { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/auth'
import Button from '../../components/Button'
import GoogleButton from '../../components/GoogleButton'
import Input from '../../components/Input'
import Header from '../../components/Header'
import getValidationErrors from '../../utils/getValidationError'
import { resetRoutes } from '../../utils/routing'

import { Container, Title, Label, SubContainer, RegisterContainer, RegisterButton, RegisterButtonText } from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const { signIn, user } = useAuth()

  const navigation = useNavigation()

  if (user) navigation.dispatch((state) => resetRoutes('MeditationPlaylist', state))

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

      navigation.dispatch((state) => resetRoutes('MeditationPlaylist', state))
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
      <Header headerTitle="Acessar minha conta" headerIcon="arrow-left" execute={() => { navigation.goBack() }} />
      <KeyboardAvoidingView
        style={{ flex: 1, }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }}
          keyboardShouldPersistTaps="handled">
          <Container>
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
          </Container>
          <SubContainer>
            <Button
              onPress={() => {
                formRef.current?.submitForm()
              }}
            >Entrar</Button>
            <GoogleButton />
          </SubContainer>

          <RegisterContainer>
            <Title>Nao tem uma conta?</Title>
            <RegisterButton onPress={() => navigation.navigate('SignUp')}>
              <RegisterButtonText>Registre-se</RegisterButtonText>
            </RegisterButton>
          </RegisterContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignIn

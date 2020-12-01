import React, { useRef, useCallback, useLayoutEffect } from 'react'
import * as Yup from 'yup'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

import { useAuth } from '../../hooks/auth'
import Button from '../../components/Button'
import GoogleButton from '../../components/GoogleButton'
import Input from '../../components/Input'
import Header from '../../components/Header'
import getValidationErrors from '../../utils/getValidationError'
import { GoogleSignin, statusCodes, User as GoogleUser } from '@react-native-community/google-signin'

import { resetRoutes } from '../../utils/routing'

import { Container, Title, Label, SubContainer, RegisterContainer, RegisterButton, RegisterButtonText } from './styles'

interface SignInFormData {
  email: string
  password: string
}

interface SignInGoogleData extends SignInFormData {
  google_id: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const { signIn, googleSignIn, user } = useAuth()

  const navigation = useNavigation()

  useLayoutEffect(() => {
    if (user === undefined) console.log('if undefined ')
    else navigation.dispatch((state) => resetRoutes('MeditationPlaylist', state))
  }, [user, navigation])

  const handleGoogleSignIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices()

      const userInfo: GoogleUser = await GoogleSignin.signIn()

      const data: SignInGoogleData = {
        email: userInfo.user.email,
        google_id: userInfo.user.id,
        password: userInfo.user.id
      }

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
        google_id: Yup.string().required('ID invalido'),
      })

      await schema.validate(data, {
        abortEarly: false
      })

      if (data) {
        const res = await api.post('/sessions/google',
          {
            google_id: data.google_id,
            password: data.password
          })
        const { user, token } = res.data
        googleSignIn({ user, token })
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(
          'Erro na autenticação',
          'O login foi cancelado'
        )
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(
          'Erro na autenticação',
          'É necessário a playstore para poder se registrar com Google.'
        )
      } else {
        Alert.alert(
          'Erro ao fazer login',
          'Nao foi possivel fazer login com sua conta do Google.'
        )
      }
    }
  }, [])

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
  }, [signIn, navigation])

  return (
    <>
      <Header headerTitle="Acessar minha conta" headerIcon="arrow-left" execute={() => { navigation.goBack() }} />
      <KeyboardAvoidingView
        style={{ flex: 1, }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView contentContainerStyle={{ backgroundColor: '#E7EFFF', flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
            <GoogleButton onPress={handleGoogleSignIn}/>
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

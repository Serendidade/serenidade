import React, { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import api from '../../services/api'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native'

import Header from '../../components/Header'
import Button from '../../components/Button'
import GoogleButton from '../../components/GoogleButton'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationError'
import { Container, Label, SubContainer } from './styles'
import { GoogleSignin, statusCodes, User as GoogleUser } from '@react-native-community/google-signin'
import { useNavigation } from '@react-navigation/native'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

interface SignUpGoogleData extends SignUpFormData {
  google_id: string
}

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)
  const emailInputRef = useRef<TextInput>(null)

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      await api.post('/users', data)

      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Você já pode fazer login na aplicação.'
      )
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
  }, [])

  const handleGoogleSignUp = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices()

      const userInfo: GoogleUser = await GoogleSignin.signIn()

      const data: SignUpGoogleData = {
        name: userInfo.user.name!,
        email: userInfo.user.email,
        google_id: userInfo.user.id,
        password: userInfo.user.id
      }

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
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
        await api.post('/users/google', data)
      }

      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Você já pode fazer login na aplicação.'
      )
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
          'Erro ao fazer cadastro',
          'Nao foi possivel fazer cadastro com sua conta do Google.'
        )
      }
    }
  }, [])

  return (
    <>
      <Header headerTitle="Criar minha conta" headerIcon="arrow-left" execute={() => { navigation.goBack() }}/>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#E7EFFF' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <Form ref={formRef} onSubmit={handleSignUp} style={{ width: '100%' }}>
              <Label>Nome</Label>
              <Input
                icon=""
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="name-phone-pad"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
                name="name"
              />

              <Label>E-mail</Label>
              <Input
                ref={emailInputRef}
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
            >Verificar e Registrar</Button>
            <SubContainer>
              <GoogleButton onPress={handleGoogleSignUp}>Registrar com Google</GoogleButton>
            </SubContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignUp

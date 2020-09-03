import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { TextInputProps } from 'react-native'
import { useField } from '@unform/core'

import { Container, TextInput } from './styles'
import colors from '../../global/colors'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

interface InputValueReference {
  value: string
}

interface InputRef {
  focus(): void
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, icon, ...rest }, ref) => {
  const inputElementRef = useRef<any>(null)

  const { registerField, defaultValue = '', fieldName, error } = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })

  useImperativeHandle(ref, () => {
    return {
      focus () {
        inputElementRef.current.focus()
      },
    }
  })

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue (ref: any, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue () {
        inputValueRef.current.value = ''
        inputElementRef.current.clear
      },
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor={colors.secondaryAccentColor}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default forwardRef(Input)

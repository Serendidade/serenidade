import React from 'react'

import { Container, TextInput } from './styles'
import colors from '../../global/colors'

const Input: React.FC = () => {
  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.secondaryAccentColor}
      />
    </Container>
  )
}

export default Input

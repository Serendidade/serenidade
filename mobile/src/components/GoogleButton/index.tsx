import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import google from '../../assets/ic_google.png'
import { Container, ImageButton } from './styles'
interface ButtonProps extends RectButtonProperties {}

const GoogleButton: React.FC<ButtonProps> = ({ ...rest }) => (
  <Container {...rest}>
    <ImageButton source={google}/>
  </Container>
)

export default GoogleButton

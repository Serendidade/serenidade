import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import google from '../../assets/ic_google.png'
import colors from '../../global/colors'
import { Container, ImageButton } from './styles'
interface ButtonProps extends RectButtonProperties {}

const GoogleButton: React.FC<ButtonProps> = ({ ...rest }) => (
  <Container {...rest}>
    <ImageButton source={google} style={{
      shadowColor: colors.spectres.white[0],
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,
    }}/>
  </Container>
)

export default GoogleButton

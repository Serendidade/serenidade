import React from 'react'

import { IconProps } from 'react-native-vector-icons/Icon'
import { IconStyle } from './styles'

interface ButtonProps extends IconProps {}

const Icon: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <IconStyle {...rest}>

    </IconStyle>
  )
}

export default Icon

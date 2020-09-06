import React from 'react'

import { IconProps } from 'react-native-vector-icons/Icon'
import { Icon } from './styles'

interface ButtonProps extends IconProps {}

const BackButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Icon {...rest}>

    </Icon>
  )
}

export default BackButton

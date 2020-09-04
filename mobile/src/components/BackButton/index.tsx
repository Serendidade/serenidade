import React from 'react'

import { IconProps } from 'react-native-vector-icons/Icon'
import { Icon } from './styles'

interface ButtonProps extends IconProps {
  name: string
}

const BackButton: React.FC<ButtonProps> = ({ children, name, size }) => {
  return (
    <Icon
      size={size}
      name={name} />
  )
}

export default BackButton

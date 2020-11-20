import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import { CardIcon, CardItem, CardText } from './styles'

interface ReflectionCardParams {
  text: string
  iconName: string
  isDateCard: boolean
}

const ReflectionCard: React.FC<ReflectionCardParams> = ({ text, iconName, isDateCard }: ReflectionCardParams) => {
  return (
    <TouchableOpacity >
      <CardItem>
        <CardText>
          O que te fez sentir gratidão hoje?
        </CardText>
        <CardIcon name="plus" size={30}/>
      </CardItem>
    </TouchableOpacity>
  )
}

export default ReflectionCard

import React from 'react'

import { CardIcon, CardItem, CardText, CardContainer } from './styles'

interface ReflectionCardParams {
  text: string
  iconName?: string
  isDateCard: boolean
  cardColor: string
}

const ReflectionCard: React.FC<ReflectionCardParams> = ({ text, iconName, isDateCard, cardColor }: ReflectionCardParams) => {
  return (
    <CardContainer>
      <CardItem isDateCard={isDateCard} cardColor={cardColor}>
        <CardText>
          {text}
        </CardText>
        {iconName && <CardIcon name={iconName} size={40}/>}
      </CardItem>
    </CardContainer>
  )
}

export default ReflectionCard

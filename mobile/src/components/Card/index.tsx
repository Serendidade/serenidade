import React from 'react'

import { CardItem, CardText, CardTitle, CardContainer } from './styles'

interface Cardas {
  title: string
  text: string
}

const Card: React.FC<Cardas> = ({ title, text }:Cardas) => {
  return (
    <CardItem>
      <CardContainer>
        <CardTitle ellipsizeMode="middle" numberOfLines={1}>
          {title}
        </CardTitle>
        <CardText>{text}</CardText>
      </CardContainer>
    </CardItem>
  )
}

export default Card

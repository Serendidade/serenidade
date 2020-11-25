import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { CardIcon, CardItem, CardText, CardContainer, ActionContainer, ActionItem, ActionText } from './styles'

interface ReflectionData {
  content: string
  created_at: Date
  id: number
}

interface ReflectionCardParams {
  text: string
  iconName?: string
  isDateCard: boolean
  cardColor: string
  executeDelete?(): void
  executeUpdate?({ content, id, created_at }: ReflectionData): void
  item?: ReflectionData

}

const ReflectionCard: React.FC<ReflectionCardParams> = ({ text, iconName, isDateCard, cardColor, item, executeDelete, executeUpdate }: ReflectionCardParams) => {
  const [visibleActions, setVisibleActions] = useState(false)
  return (
    <CardContainer>
      <CardItem isDateCard cardColor={cardColor} >
        <CardText>
          {text}
        </CardText>
      </CardItem>
    </CardContainer>
  )
}

export default ReflectionCard

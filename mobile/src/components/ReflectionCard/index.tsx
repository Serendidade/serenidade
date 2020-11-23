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
      <CardItem isDateCard={isDateCard} cardColor={cardColor} >
        <CardText>
          {text}
        </CardText>
        {iconName &&
        <>
          <CardIcon name={iconName} size={30} style={{ position: 'absolute', right: 2 }} onPress={() => setVisibleActions(!visibleActions)}/>
          {visibleActions
            ? <ActionContainer style={{ position: 'absolute' }}>
              <TouchableOpacity onPress={() => executeDelete()}>
                <ActionItem>
                  <CardIcon name="trash-can-outline" size={30} style={{ color: 'red' }}/>
                  <ActionText>
                    Excluir
                  </ActionText>
                </ActionItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => executeUpdate({ content: item.content, item: item.id, created_at: item.created_at })}>
                <ActionItem>
                  <CardIcon name="comment-edit" size={30} style={{ color: '#7159c1', right: 3 }}/>
                  <ActionText>
                    Editar
                  </ActionText>
                </ActionItem>
              </TouchableOpacity>

            </ActionContainer> : null
          }

        </>
        }

      </CardItem>
    </CardContainer>
  )
}

export default ReflectionCard

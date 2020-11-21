import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { CardIcon, CardItem, CardText, CardContainer, ActionContainer, ActionItem, ActionText } from './styles'

interface ReflectionCardParams {
  text: string
  iconName?: string
  isDateCard: boolean
  cardColor: string
  executeUpdate?(): void
  executeDelete?(): void
}

const ReflectionCard: React.FC<ReflectionCardParams> = ({ text, iconName, isDateCard, cardColor, executeUpdate, executeDelete }: ReflectionCardParams) => {
  const [visibleActions, setVisibleActions] = useState(false)

  return (
    <CardContainer>
      <CardItem isDateCard={isDateCard} cardColor={cardColor}>
        <CardText>
          {text}
        </CardText>
        {iconName &&
        <>
          <CardIcon name={iconName} size={30} style={{ right: 10 }} onPress={() => setVisibleActions(!visibleActions)}/>
          {visibleActions
            ? <ActionContainer style={{ right: 30, position: 'absolute' }}>
              <TouchableOpacity onPress={() => executeDelete}>
                <ActionItem>
                  <CardIcon name="trash-can-outline" size={30} style={{ color: 'red' }}/>
                  <ActionText>
                    Excluir
                  </ActionText>
                </ActionItem>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => executeUpdate}>
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

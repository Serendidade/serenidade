import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  CardIcon,
  DateCardItem,
  DateCardText,
  ReflectionCardText,
  CardContainer,
  ActionContainer,
  ActionItem,
  ActionText,
  ReflectionCardItem
} from './styles'

interface ReflectionData {
  content: string
  created_at: Date
  id: number
}

interface ReflectionCardParams {
  executeDelete(): void
  executeUpdate({ content, id, created_at }: ReflectionData): void
  item: ReflectionData

}

const ReflectionCard: React.FC<ReflectionCardParams> = ({ item, executeDelete, executeUpdate }: ReflectionCardParams) => {
  const [visibleActions, setVisibleActions] = useState(false)

  const navigation = useNavigation()
  return (
    <CardContainer>
      <DateCardItem >
        <DateCardText>
          {item.created_at}
        </DateCardText>
      </DateCardItem>
      <ReflectionCardItem>
        <ReflectionCardText>
          {item.content}
        </ReflectionCardText>
        <CardIcon name="dots-vertical" isDelete={false} size={30} onPress={() => setVisibleActions(!visibleActions)}/>

      </ReflectionCardItem>
      {visibleActions ? <ActionContainer>
        <ActionItem onPress={() => navigation.navigate('DetailReflection', { content: item.content, id: item.id })}>
          <CardIcon name="comment-edit" isDelete={false} size={30} onPress={() => setVisibleActions(!visibleActions)}/>

          <ActionText>
              Editar
          </ActionText>
        </ActionItem>
        <ActionItem onPress={() => executeDelete()}>
          <CardIcon name="trash-can-outline" isDelete size={30} color={'#7159c1' }onPress={() => setVisibleActions(!visibleActions)}/>
          <ActionText>
              Excluir
          </ActionText>
        </ActionItem>
      </ActionContainer> : null}
    </CardContainer>
  )
}

export default ReflectionCard

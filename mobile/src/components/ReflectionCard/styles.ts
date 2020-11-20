import styled from 'styled-components/native'
import fonts from '../../global/fonts'
import colors from '../../global/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface CardItemProps {
  isDateCard: boolean
  cardColor: string
}

export const CardItem = styled.View<CardItemProps>`
  width: 90%;
  background-color:${props => props.cardColor};
  border-radius:${props => props.isDateCard ? '8px' : '10px'};
  margin-bottom: ${props => props.isDateCard ? '4px' : '20px'};
  margin-top: ${props => !props.isDateCard ? '20px' : '0'};
  padding-right: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CardText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: 16px;
  margin-left: 8px;
  text-align: left;
  color: ${colors.spectres.white};
`

export const CardIcon = styled(Icon)`
 color: ${colors.spectres.white};
 padding-left: 2px;
 margin-left: 8px;
`
export const CardContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  height: auto;
`

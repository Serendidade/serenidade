import styled from 'styled-components/native'
import fonts from '../../global/fonts'
import colors from '../../global/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface CardItemProps {
  isDateCard: boolean
  cardColor: string
}

export const CardItem = styled.View<CardItemProps>`
  width: 95%;
  background-color:${props => props.cardColor};
  min-height: ${props => !props.isDateCard ? '60px' : '0px'};
  border-radius:${props => props.isDateCard ? '8px' : '10px'};
  margin-bottom: ${props => props.isDateCard ? '0px' : '8px'};
  margin-top: ${props => !props.isDateCard ? '8px' : '0px'};
  justify-content: center;
  align-items: center;
  flex-direction: row;

`

export const CardText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: 16px;
  margin-left: 30px;
  text-align: left;
  padding-right: 12px;
  color: ${colors.spectres.white};
`

export const CardIcon = styled(Icon)`
 color: ${colors.spectres.white};
 align-items: flex-end;
 padding-left: 2px;
 margin-left: 8px;
`
export const CardContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

`

export const ActionContainer = styled.View`
  justify-content: center;
  padding: 8px 12px 8px 0;
  margin: 40px 20px;
  right: 16px;
  z-index: 3;
  background-color: #E7E0EF;
  width: auto;
  height: auto;
  border-radius: 4px;

`

export const ActionItem = styled.View`
flex-direction: row;
text-align: left;
width: auto;
  height: auto;
`

export const ActionText = styled.Text`
  font-size: 16px;
  color: ${colors.spectres.grey[0]};
text-align: left;

`

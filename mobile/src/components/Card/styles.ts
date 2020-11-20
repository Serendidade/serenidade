
import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface CardContainerProps {
  hasPlayButton: boolean
}

export const CardContainer = styled.View<CardContainerProps>`
  width: ${props => props.hasPlayButton ? '65%' : '72%'};
  flex-direction: column;
  left: ${props => props.hasPlayButton ? '16px' : '8px'};
  align-items: flex-start;
  justify-content: center;
  margin-left: 12px;
`

export const CardItem = styled.View`
  width: 100%;
  height: 100px;
  background-color: #f8f8f8;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-right: 15px;
`

export const CardText = styled.Text`
  font-family: ${fonts.quicksand.regular};
  font-size: 16px;
  color: ${colors.spectres.grey[2]};
`

export const CardTitle = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: 18px;
  color: ${colors.spectres.grey[3]};
`

export const CardIcon = styled(Icon)`
 color: ${colors.spectres.grey[3]};
 padding-left: 2px;
`
export const CardPlayIcon = styled(Icon)`
 color: ${colors.secondaryColor};
`

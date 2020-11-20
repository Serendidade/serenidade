import styled from 'styled-components/native'
import fonts from '../../global/fonts'
import colors from '../../global/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const CardItem = styled.View`
  width: 90%;
  height: 100px;
  background-color: ${colors.primaryColor};
  border-radius: 15px;
  flex-direction: row;
  align-self: center;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-right: 15px;
`

export const CardText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: 16px;
  color: ${colors.spectres.white};
  justify-content: center;
`

export const CardIcon = styled(Icon)`
 color: ${colors.spectres.white};
 padding-left: 2px;
`

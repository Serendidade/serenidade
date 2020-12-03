import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const Container = styled.View`
  align-items: center;
  margin-bottom: 12px;
`

export const AddReflectionCard = styled(TouchableOpacity)`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin: 20px 15px 20px 15px;
  background-color: ${colors.primaryColor};
  height: 60px;
  align-self: center;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const CardText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: 16px;
  margin-left: 30px;
  text-align: left;
  color: ${colors.spectres.white};
`
export const Wrap = styled.View`
  width: 95%;
  align-self: center;
  padding: 15px;
  border-radius: 8px;
  background-color: #E7E0EF;
`

export const CardIcon = styled(Icon)`
 color: ${colors.spectres.white};
 padding-left: 2px;
 margin-left: 8px;
`

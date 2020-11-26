import styled from 'styled-components/native'
import fonts from '../../global/fonts'
import colors from '../../global/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconProps{
  isDelete: boolean
}

export const DateCardItem = styled.View`
  width: 95%;
  background-color:#7159c1;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

`

export const ReflectionCardItem = styled.View`
  width: 95%;
  background-color: #fff;
  min-height: 60px;
  border-radius:10px;
  margin-bottom: 8px;
  margin-top: 8px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:row;
`

export const DateCardText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: 16px;
  text-align: center;
  color: ${colors.spectres.white};
`

export const ReflectionCardText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: 16px;
  margin-left: 30px;
  text-align: left;
  color: ${colors.spectres.grey[3]};
  padding-right: 8px;
`

export const CardIcon = styled(Icon)<IconProps>`
  justify-content: space-between;
  color: ${props => props.isDelete ? 'red' : colors.spectres.grey[2]};
  right: 4px;
`
export const CardContainer = styled.View`
  align-items: center;
`

export const ActionContainer = styled.View`
  position: absolute;
  z-index: 3;
  background-color: ${colors.spectres.grey[0]};
  align-items: flex-end;
  justify-content: space-evenly;
  width: 100px;
  height: 80px;
  padding: 8px;
  border-radius: 8px;
`

export const ActionItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
`

export const ActionText = styled.Text`
  font-size: 16px;
  color: ${colors.spectres.white};
`

import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DataInterface } from './index'
import { FlatList } from 'react-native'

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.spectres.grey[1]};
  height: 100%;
`

export const MeditationsList = styled(FlatList as new () => FlatList<DataInterface>)`
  width: 100%;
`

export const MeditationContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`

export const MeditationItem = styled.View`
  height: 100px;
  background-color: #F8F8F8;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-right: 15px;
`

export const MeditationText = styled.Text`
  font-family: ${fonts.quicksand.regular};
  font-size: 16px;
  color: ${colors.spectres.grey[2]};
`

export const MeditationTitle = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: 18px;
  color: ${colors.spectres.grey[3]};
`

export const MeditationIcon = styled(Icon)`
 color: ${colors.spectres.green[0]};
 padding-left: 5px;
`

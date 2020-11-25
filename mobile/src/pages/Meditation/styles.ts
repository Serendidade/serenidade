import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../../components/Card'
import { DataInterface } from './index'
import { FlatList } from 'react-native'

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background-color: #E7EFFF;
  height: 100%;
`

export const MeditationsList = styled(FlatList as new () => FlatList<DataInterface>)`
  width: 100%;
`

export const MeditationIcon = styled(Icon)`
 color: ${colors.spectres.green[0]};
 padding-left: 2px;
`

export const ChosenMeditationText = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: 18px;
  color: ${colors.spectres.grey[3]};
`

export const ChosenPlaylistCard = styled.View`
  width: 100%;
  height: 140px;
  background-color: #f8f8f8;
  border-radius: 15px;
  align-self: center;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-right: 15px;
  flex-direction: row;
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

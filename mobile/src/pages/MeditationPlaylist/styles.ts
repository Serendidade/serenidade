import styled from 'styled-components/native'

import colors from '../../global/colors'

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

export const Playlist = styled(FlatList as new () => FlatList<DataInterface>)`
  width: 100%;
`

export const PlaylistItem = styled.View`
  height: 100px;
  background-color: #F8F8F8;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-right: 15px;
`

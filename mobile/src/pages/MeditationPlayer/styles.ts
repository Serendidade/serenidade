import styled from 'styled-components/native'

import fonts from '../../global/fonts'
import dimensions from '../../global/dimensions'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  margin-left: 10px;
  height: 56px;
  margin-top: 10%;
`

export const Title = styled.Text`
  font-size: ${dimensions.textSize.title};
  font-family: ${fonts.raleway.bold};
`

export const Text = styled.Text`
  font-size: ${dimensions.textSize.label};
  font-family: ${fonts.quicksand.regular};
`

export const WrapContainer = styled.View`
  flex: 1;
  flex-direction: column;
`

export const PlayerIcon = styled(Icon)`
  width: 100px;
  height: 100px;
  background-color: #7159c1;
  color: #fafafa;
  border-radius: 50px;
  align-self: center;


`

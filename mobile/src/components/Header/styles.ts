import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import dimensions from '../../global/dimensions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`

`

export const HeaderContainer = styled.View`
  flex-direction: column;
  background-color: ${colors.spectres.purple[0]};
  width: 100%;
  padding: 10px 10px;
`

export const HeaderTitle = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: ${dimensions.textSize.titleHeader};
  color: ${colors.spectres.white[0]};
  margin-left: 5px;
`

export const HeaderIcon = styled(Icon)`
 color: ${colors.spectres.white[0]};
 padding: 10px 0px;
`

import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import dimensions from '../../global/dimensions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
  margin-top: 5px;
`

export const HeaderIcon = styled(Icon)`
 color: ${colors.spectres.white[0]};
 padding: 5px 0px;
`
export const Container = styled.View`
  justify-content: center;
  padding: 15px;
`
export const SubContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.quicksand.regular};
  color: ${colors.secondaryAccentColor};

`

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${fonts.quicksand.regular};
  color: ${colors.secondaryAccentColor};
  margin-top: 10px;
`

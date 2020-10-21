import styled from 'styled-components/native'
import colors from '../../global/colors'
import dimensions from '../../global/dimensions'
import fonts from '../../global/fonts'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0px 15px 0px;

`
export const Title = styled.Text`
  font-family: ${fonts.quicksand.regular};
  font-size: ${dimensions.textSize.title};
  color: ${colors.spectres.grey[0]};
`

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: baseline;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  padding: 15px;
`

export const ButtonText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: ${dimensions.textSize.title};
  color: ${colors.spectres.green[0]};
`
export const ButtonIcon = styled(Icon)`
  color: ${colors.spectres.green[0]};
`

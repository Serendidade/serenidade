import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const HeaderContainer = styled.View`
  flex-direction: column;
  background-color: ${colors.spectres.purple[0]};
  width: 100%;
  padding: 10px 10px;
`

export const HeaderTitle = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: 30px;
  color: ${colors.spectres.white[0]};
  margin-top: 5px;
`

export const HeaderIcon = styled(Icon)`
 color: ${colors.spectres.white[0]};
 padding: 5px 0px;
`

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 15px;

`

export const SubContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
`

export const RegisterContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  padding: 15px;
`

export const RegisterButton = styled.TouchableOpacity`
  margin-left: 10px;
`

export const RegisterButtonText = styled.Text`
  font-size: 20px;
  font-family: ${fonts.quicksand.bold};
  color: ${colors.spectres.grey[0]};
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.quicksand.regular};
  color: ${colors.spectres.grey[1]};

`

export const Label = styled.Text`
  font-size: 20px;
  font-family: ${fonts.quicksand.regular};
  color: ${colors.spectres.grey[1]};
  margin-top: 30px;

`

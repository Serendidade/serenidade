import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import dimensions from '../../global/dimensions'

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
  font-size: ${dimensions.textSize.title};
  font-family: ${fonts.quicksand.bold};
  color: ${colors.spectres.grey[0]};
`

export const Title = styled.Text`
  font-size: ${dimensions.textSize.title};
  font-family: ${fonts.quicksand.regular};
  color: ${colors.spectres.grey[1]};

`

export const Label = styled.Text`
  font-size: ${dimensions.textSize.label};
  font-family: ${fonts.quicksand.regular};
  color: ${colors.spectres.grey[1]};
  margin-top: 30px;

`

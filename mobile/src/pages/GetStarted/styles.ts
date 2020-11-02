import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'
import dimensions from '../../global/dimensions'

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

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const Phrase = styled.Text`
  font-family: ${fonts.quicksand.medium};
  color: ${colors.spectres.grey[0]};
  font-size: ${dimensions.textSize.title};
  text-align: center;
`
export const ButtonText = styled.Text`
  font-family: ${fonts.quicksand.bold};
  font-size: ${dimensions.textSize.title};
  color: ${colors.spectres.green[0]};
`

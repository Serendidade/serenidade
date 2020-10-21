import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import colors from '../../global/colors'
import dimensions from '../../global/dimensions'
import fonts from '../../global/fonts'

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: ${colors.primaryColor};
  border: 1px solid #EAAAB8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`

export const ButtonText = styled.Text`
  color: ${colors.primatyAccentColor};
  font-size: ${dimensions.textSize.title};
  line-height: 27px;
  font-family: ${fonts.quicksand.medium}
`

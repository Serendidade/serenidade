import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import colors from '../../global/colors'

export const Container = styled(RectButton)`
  width: 75px;
  height: 50px;
  background: ${colors.primaryColor};
  box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

`

export const ImageButton = styled.ImageBackground`
  width: 32px;
  height: 32px;
`

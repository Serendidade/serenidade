import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 40px;
  background: #F16E8B;
  border: 1px solid #EAAAB8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: #fafafa;
  font-size: 18px;
`

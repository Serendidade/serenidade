import styled from 'styled-components/native'
import Button from '../../../components/Button'
import { TextInput } from 'react-native'

export const Container = styled.View`
  align-items: center;
  margin-top: 24px;

`
export const ContentInput = styled(TextInput)`
  width: 95%;
  height: 80%;
  background-color: #fff;
  border-radius: 8px;
  color: #7159c1;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
`

export const ReflectionSaveButton = styled(Button)`
  width: 36%;
  height: 6%;
  align-self: flex-end;
  margin-right: 8px;
  margin-top: 12px;
`

import styled from 'styled-components/native'
import Button from '../../../components/Button'
import { TextInput } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: #E7EFFF;
  padding: 15px;
`
export const ContentInput = styled(TextInput)`
  width: 100%;
  height: 80%;
  padding-left: 5px;
  background-color: #fff;
  border-radius: 8px;
  color: #7159c1;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
`

export const ReflectionSaveButton = styled(Button)`


`

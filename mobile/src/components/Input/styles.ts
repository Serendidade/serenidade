import styled from 'styled-components/native'
import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const Container = styled.View`
  width: 100%;
`

export const TextInput = styled.TextInput`
  color: ${colors.secondaryColor};
  font-size: 16px;
  font-family: ${fonts.regular};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primaryColor};
  padding-left: 0px;
`

import styled, { css } from 'styled-components/native'
import colors from '../../global/colors'
import fonts from '../../global/fonts'

interface InputProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View`
  width: 100%;



`

export const TextInput = styled.TextInput<InputProps>`
  color: ${colors.secondaryColor};
  font-size: 16px;
  font-family: ${fonts.regular};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primaryColor};
  padding-left: 0px;

  ${props => props.isErrored && css`border-bottom-color: black`}
`

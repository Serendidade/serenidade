import styled, { css } from 'styled-components/native'
import colors from '../../global/colors'
import dimensions from '../../global/dimensions'
import fonts from '../../global/fonts'

interface InputProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View`
  width: 100%;
`

export const TextInput = styled.TextInput<InputProps>`
  color: ${colors.spectres.grey[2]};
  font-size: 16px;
  font-family: ${fonts.quicksand.regular};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.spectres.grey[3]};
  padding-left: 0px;

  ${props => props.isErrored && css`border-bottom-color: black`}
`

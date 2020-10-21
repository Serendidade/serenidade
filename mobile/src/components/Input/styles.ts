import styled, { css } from 'styled-components/native'
import colors from '../../global/colors'
import fonts from '../../global/fonts'
import dimensions from '../../global/dimensions'


interface InputProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View`
  width: 100%;
  padding: 15px 0px;

`

export const TextInput = styled.TextInput<InputProps>`
  color: ${colors.spectres.grey[2]};
  font-size: ${dimensions.textSize.textInput};
  font-family: ${fonts.quicksand.regular};
  border-bottom-width: 2px;
  border-bottom-color: ${colors.spectres.grey[3]};
  padding-left: 0px;

  ${props => props.isErrored && css`
    border-bottom-color: ${colors.spectres.red[0]};
  `}
`

import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 25px;
  margin-bottom: 15px;
`

export const Title = styled.Text`
  font-size: 24px;
  line-height: 33px;
  font-family: ${fonts.regular};
  color: ${colors.secondaryColor};
`

export const Label = styled.Text`
  font-size: 18px;
  line-height: 25px;
  font-family: ${fonts.regular};
  color: ${colors.secondaryAccentColor};
  margin-top: 30px;
  margin-bottom: 10px;
`

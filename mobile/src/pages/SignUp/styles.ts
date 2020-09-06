import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  margin-bottom: 50px;
  flex-direction: column;
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

`

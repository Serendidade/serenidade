import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const Container = styled.View`
  justify-content: center;
  padding: 15px;
`
export const SubContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${fonts.quicksand.regular};
  color: ${colors.secondaryAccentColor};

`

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${fonts.quicksand.regular};
  color: ${colors.secondaryAccentColor};
  margin-top: 10px;
`

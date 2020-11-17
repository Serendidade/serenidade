
import styled from 'styled-components/native'

import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const CardContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
`

export const CardItem = styled.View`
  height: 100px;
  background-color: #F8F8F8;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 15px;
  padding-right: 15px;
`

export const CardText = styled.Text`

  font-family: ${fonts.quicksand.regular};
  font-size: 16px;
  color: ${colors.spectres.grey[2]};
`

export const CardTitle = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: 18px;
  color: ${colors.spectres.grey[3]};
`

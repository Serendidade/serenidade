import styled from 'styled-components/native'
import colors from '../global/colors'
import dimensions from '../global/dimensions'
import fonts from '../global/fonts'

export const Container = styled.View`
  background-color:${colors.spectres.purple[0]};
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-color: #fff;
  border-bottom-width: 3px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

`
export const Title = styled.Text`
  font-family: ${fonts.raleway.bold};
  font-size: ${dimensions.textSize.titleHeader} ;
  color: ${colors.spectres.white[0]};
`

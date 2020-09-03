import styled from 'styled-components/native'
import colors from '../../global/colors'
import fonts from '../../global/fonts'

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 10px;
  margin-bottom: 15px;
`

export const ImageFlowerSit = styled.Image`
  width: 100%;
  height: 179px;
  flex: 2;
  align-self: center;
`

export const ContainerPhrases = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.regular};
  color: ${colors.primatyAccentColor};
  line-height: 33px;
  text-align: center;
`

export const SubTitle = styled.Text`
  font-family: ${fonts.light};
  color: ${colors.primatyAccentColor};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  margin-top: 10px;
`

export const SignInButton = styled.TouchableOpacity`
  margin-top: 4px;
`

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 4px;
`

export const ButtonText = styled.Text`
  font-family: ${fonts.bold};
  color: ${colors.primatyAccentColor};
  font-size: 24px;
  line-height: 27px;
  margin-bottom: 23px;
`

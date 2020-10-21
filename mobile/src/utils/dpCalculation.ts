import { Dimensions, PixelRatio } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

function widthPercentageToDP (widthPercent: number) : number {
  const elemWidth = parseFloat(widthPercent.toString())
  return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100)
}

function heightPercentageToDP (heightPercent: number) : number {
  const elemHeight = parseFloat(heightPercent.toString())
  return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100)
}

export {
  widthPercentageToDP,
  heightPercentageToDP
}

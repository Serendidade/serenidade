import { widthPercentageToDP } from '../utils/dpCalculation'

export default {
  textSize: {
    titleHeader: `${widthPercentageToDP(7.7)}px`,
    title: `${widthPercentageToDP(5.1)}px`,
    label: `${widthPercentageToDP(4.6)}px`,
    textInput: `${widthPercentageToDP(4.1)}px`,
  },
  icon: widthPercentageToDP(7),
  button: {
    text: `${widthPercentageToDP(6.1)}px`,
    width: `${widthPercentageToDP(100)}%`,
    height: `${widthPercentageToDP(15)}px`
  },
  image: widthPercentageToDP(80),
}

import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';
import {vw, vh} from '../../../units/index';

export default style = StyleSheet.create({
  touchableButtonStyle: {
    width: 90 * vw,
    backgroundColor: theme.defaultForgotPasswordColor,
    // borderRadius: 8 * vw,
    height: 7 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  titleTextStyle: {
    // fontFamily: Fonts.PM,
    color: theme.whiteBackground,
    fontSize: 2 * vh,
  },
});

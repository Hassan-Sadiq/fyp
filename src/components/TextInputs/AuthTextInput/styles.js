import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
// import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  textInputView: {
    width: 80 * vw,
    height: 8 * vh,
    borderColor: theme.defaultInactiveBorderColor,
    borderWidth: 0.1 * vw,
    flexDirection: 'row',
    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },

  customStyle: {
    width: 80 * vw,
    height: 8 * vh,
    borderColor: theme.activeTextInputColor,
    borderWidth: 0.1 * vw,
    flexDirection: 'row',
    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },

  textInputStyle: {
    marginLeft: 2 * vw,
    color: '#0C0D34',
    fontFamily: Fonts.SFR,
    width: 62 * vw,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  emailIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4 * vw,
  },

  eye: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: 'black',
  },
  eyeHidden: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: 'grey',
  },
  eyeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4 * vw,
  },
});

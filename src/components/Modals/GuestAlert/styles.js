import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../units/index';

import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';

export default StyleSheet.create({
  blurViewStyle: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    opacity: 0.5,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },
  choiceButtonView: {
    flexDirection: 'row',
    width: 80 * vw,
    marginTop: vh * 5,
    justifyContent: 'space-around',
  },
  yesButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.whiteBackground,
    borderColor: theme.defaultTextColor,
    borderWidth: 0.5 * vw,
  },
  yesTextStyle: {
    fontSize: 2.2 * vh,
    fontFamily: Fonts.SFR,
    color: theme.defaultTextColor,
  },

  noButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.defaultBackgroundColor,
  },
  tickView: {
    backgroundColor: theme.lightGreen,
    width: vh * 8,
    height: vh * 8,
    borderRadius: vh * 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vh * 3,
  },

  alertMainView: {
    backgroundColor: '#ffffff',
    width: 100 * vw,
    alignSelf: 'center',
    marginTop: 20 * vh,
    padding: 3 * vw,
    // borderTopRightRadius: 15 * vw,
    height: 45 * vh,
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 1,
  },

  crossIconView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  checkIconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkIconStyle: {
    resizeMode: 'contain',
    height: 6 * vh,
    width: 6 * vw,
  },

  customAlertHeadingTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.5 * vh,
    textAlign: 'center',
     width: '50%',
     justifyContent: "center", alignItems: "center",
    color: theme.black,
  },

  customAlertDescriptionTextStyle: {
    color: '#666666',
    fontFamily: Fonts.SFR,
    fontSize: 2 * vh,
    color: theme.defaultAuthDescriptionColor,
  },

  submitButtonView: {
    width: 50 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.defaultForgotPasswordColor,
  },

  textStyle: {
    fontSize: 2.2 * vh,
  },

  barViewStyle: {
    backgroundColor: theme.defaultInactiveBorderColor,
    height: 0.5 * vh,
    width: 20 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 2 * vw,
  },
  customAlertHeadingTextStyle: {
    fontFamily: Fonts.MSW,
    color: theme.black
  },
   
  noTextStyle: {},
});

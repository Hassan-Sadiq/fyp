import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets/fonts';
import {vh, vw} from '../../units';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    zIndex: 999,
    overflow: 'hidden',
  },
  outerStyle: {
    flex: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    borderRadius: vw * 10,
    height: vh * 7,
  },
  btnText: {
    fontSize: vw * 4.5,
    marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },
  roundText: {
    fontSize: vw * 4.5,
    marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: 'black',
  },
  roundBlank: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: vw * 4,
    borderRadius: vw * 10,
    height: vh * 7,
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  blurViewStyle: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    backgroundColor: theme.lightBlack,
    opacity: 0.5,
  },
  alertMainView: {
    backgroundColor: '#ffffff',
    width: 90 * vw,
    alignSelf: 'center',
    marginTop: 20 * vh,
    padding: 3 * vw,
    borderRadius: 6 * vw,
    height: 45 * vh,
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
    height: 14 * vh,
    width: 14 * vw,
  },

  customAlertHeadingTextStyle: {
    fontFamily: Fonts.ECB,
    fontSize: 2.5 * vh,
    textAlign: 'center',
    marginBottom: 2 * vh,
    width: 50 * vw,
  },
  yesButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.defaultBackgroundColor,
    borderColor: theme.defaultTextColor,
    borderWidth: 0.5 * vw,
  },

  noButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.black,
  },

  textStyle: {
    fontSize: 2.2 * vh,
  },

  yesTextStyle: {
    fontSize: 2.2 * vh,
    fontFamily: Fonts.SFR,
    color: theme.whiteBackground,
  },

  choiceButtonView: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-around',
  },
});

export default styles;

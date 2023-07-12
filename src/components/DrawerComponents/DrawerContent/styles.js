import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.defaultBackgroundColor,
    borderBottomRightRadius: 14 * vw,
    borderTopEndRadius: 14 * vh,
    // borderBottomRightRadius: 10 * vw,
    // borderTopRightRadius: 10 * vw,
  },
  drawercontainer: {
    height: vh * 100,
    width: vw * 60,
    marginTop: vh * 1,
    // paddingLeft: vw * 8,
    marginLeft: vw * 4,
  },
  nameStyle: {
    fontFamily: Fonts.MTB,
    color: theme.whiteBackground,
    fontSize: 2.8 * vh,
    marginTop: 1 * vh,
    marginBottom: 1 * vh,
  },

  usernameTextStyle: {
    color: theme.whiteBackground,
    opacity: 0.6,
    fontFamily: Fonts.MTR,
    fontSize: 1.8 * vh,
  },
  routeContainer: {
    marginTop: 3 * vh,
  },
  name: {
    fontSize: 2.4 * vh,
    color: 'white',
    marginLeft: 5 * vw,
  },
  profileImage: {
    resizeMode: 'contain',
    height: vh * 6,
    width: vh * 6,
    borderRadius: (vh * 10) / 2,
    backgroundColor: theme.whiteBackground,
  },

  logoImage: {
    height: vh * 18,
    width: vh * 18,
    borderRadius: vh * 10,
  },
  header: {
    marginBottom: vh * 5,
    marginLeft: 5 * vw,
  },

  crossButtonView: {
    marginTop: 10 * vh,
    alignItems: 'flex-end',
    marginRight: 4 * vw,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vw,
  },

  icon: {
    tintColor: theme.whiteBackground,
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },

  label: {
    fontSize: 2 * vh,
    color: theme.whiteBackground,
  },

  logoutButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  blurViewStyle: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    // backgroundColor: theme.defaultTextColor,
    opacity: 0.5,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 3 * vw,
    width: 3 * vw,
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

  yesButtonView: {
    width: 35 * vw,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: theme.whiteBackground,
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
    color: theme.defaultTextColor,
  },

  choiceButtonView: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-around',
  },
});
export default styles;

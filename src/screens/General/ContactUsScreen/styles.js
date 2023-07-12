import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 5 * vh,
    marginBottom: 0 * vh,
    backgroundColor: theme.lightBlack,
    height: vh * 24,
    width: vw * 100,
    paddingVertical: vh * 12,
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 30 * vw,
    width: 70 * vw,
  },

  fieldContainer: {
    backgroundColor: theme.whiteBackground,
    height: 60 * vh,
    width: 100 * vw,
    // borderTopRightRadius: 12 * vw,
  },

  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    alignSelf: 'center',
  },

  welcomeDescriptionText: {
    width: 80 * vw,
    fontSize: 1.8 * vh,
    marginTop: 1 * vh,
    color: theme.defaultAuthDescriptionColor,
  },

  welcomeBackTextStyle: {
    fontSize: 3 * vh,
    fontFamily: Fonts.MSW,
    marginLeft: 4 * vw,
    alignSelf: 'center',
    color: theme.black,
  },

  fieldsView: {
    marginTop: 2 * vh,
  },

  checkIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  mainRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },

  checkButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rememberTextStyle: {
    fontSize: 1.8 * vh,
    alignSelf: 'center',
    position: 'absolute',
    marginLeft: 6 * vw,
    fontFamily: Fonts.SFR,
  },

  forgotPasswordButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
  },

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 4 * vh,
  },

  messageView: {
    width: 80 * vw,
    height: 20 * vh,
    flexDirection: 'row',
    borderColor: theme.defaultInactiveBorderColor,
    borderWidth: 0.1 * vw,
    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },

  textInputStyle: {
    marginLeft: 2 * vw,
    color: theme.black,
    width: 65 * vw,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  emailIconView: {
    marginLeft: 4 * vw,
    marginTop: 2.3 * vh,
  },

  contactUsScreenIconView: {
    flexDirection: 'row',
    marginTop: 4 * vh,
    width: 80 * vw,
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 6 * vh,
    width: 6 * vw,
    tintColor: theme.black,
  },

  leftArrowIconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;

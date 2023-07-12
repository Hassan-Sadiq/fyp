import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';
import {DEVICE_WIDTH, vh, vw} from '../../../units';

const styles = StyleSheet.create({
  container: {
    height: vh * 80,
    width: vw * 100,
    alignItems: 'center',
  },

  successImg: {
    alignSelf: 'center',
    marginTop: vh * 7,
    width: vw * 24,
    height: vw * 24,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textView: {
    marginTop: vh * 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  popupButton: {
    flex: 1,
    flexDirection: 'row',
    marginTop: vh * 4,
    marginBottom: vh * 4,
  },
  popupBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    borderRadius: vw * 10,
    height: vh * 7,
  },
  roundBlank: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: vw * 4,
    borderRadius: vw * 10,
    height: vh * 7,
    borderColor: theme.defaultInactiveBorderColor,
    borderWidth: 1,
    backgroundColor: theme.defaultInactiveBorderColor,
  },
  roundText: {
    fontSize: vw * 4.5,
    marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: theme.black,
  },
  popupBtnText: {
    fontSize: vw * 4.5,
    marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: theme.whiteBackground,
  },

  textHead: {
    fontSize: vw * 6,
    color: theme.black,
    textAlign: 'center',
  },
  subContainer: {
    height: vh * 85,
    paddingBottom: vh * 10,
    width: DEVICE_WIDTH - 45,
  },
  headerStyle: {
    height: vh * 6,
    marginTop: vh * 5,
    flexDirection: 'row',
  },
  headerStyleTwo: {
    height: vh * 10,
  },
  headerView: {
    marginTop: vh * 5,
  },
  textSignIn: {
    borderBottomColor: theme.headerColor,
    borderBottomWidth: 1,
    color: theme.headerColor,
    fontFamily: Fonts.BMB,
    fontSize: vw * 4,
  },
  textSignUp: {
    color: theme.black,
    fontFamily: Fonts.BMB,
    fontSize: vw * 4,
  },
  viewSignIn: {
    width: vw * 17,
    height: vh * 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginVertical: vh,
    color: theme.black,
    fontSize: vw * 6.7,
  },
  description: {
    color: theme.black,
    fontSize: vw * 3.6,
    width: vw * 86,
  },
  inputView: {},
  rememberMeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgetPasswordButton: {},
  forgetPasswordTxt: {
    color: theme.black,
    fontFamily: Fonts.BMB,
    fontSize: vw * 3,
  },
  button: {
    alignItems: 'center',
  },
  signIn: {
    width: '85%',
    height: vh * 5,
    marginVertical: vh,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: vw * 10,
    backgroundColor: 'blue',
  },
  submitButtonStyle: {
    width: 40 * vw,
    height: vh * 5,
  },
  textSign: {
    fontSize: vw * 3.4,
    color: theme.black,
  },
  textSignTwo: {
    fontFamily: Fonts.BMB,

    fontSize: vw * 3.4,
    color: theme.black,
  },
  message: {
    borderWidth: 1,
    height: vh * 18,
    paddingTop: vw * 5,
    paddingLeft: vw * 5,
    borderRadius: vh * 3,
    textAlignVertical: 'top',
  },
  btn: {
    width: vw * 45,
    borderRadius: vw * 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: vh * 7,
  },
  btnText: {
    fontSize: vw * 1.5,

    // letterSpacing: 0,
    textAlign: 'center',
    color: theme.headerColor,
  },
  linkBtnContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: vh,
  },
});
export default styles;

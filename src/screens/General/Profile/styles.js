import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    //flex: 1,
  },
  inputText: {
    color: 'black',
    fontSize: vw * 3.6,
    fontFamily: Fonts.OB,
  },
  textInput: {
    marginVertical: vh,
    height: vh * 6.5,
    borderRadius: vw * 10,
    borderColor: '#C9C9C9',
    // fontFamily: fonts.WorkSans.Regular,
    // fontWeight: fonts.WorkSans.fontWeightNormal,
    fontSize: vw * 3.1,
    color: 'black',
  },
  subContainer: {
    // position: 'absolute',
    flex: 1,
    // bottom: 0,
    // height: "77%",
    width: vw * 100 - 40,
    marginTop: vh * 2,
  },
  headerStyle: {
    height: vh * 6,
    marginTop: vh * 5,
  },
  headerStyleTwo: {
    marginTop: vh * 3.5,
    //height: vh*9,
  },
  progressStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerView: {},
  textSignIn: {
    borderBottomColor: '#CD9D52',
    borderBottomWidth: 1,
    color: '#CD9D52',
    // fontFamily: fonts.WorkSans.SemiBold,
    // fontWeight: fonts.fontWeightNormal,
    fontSize: 14,
  },
  textSignUp: {
    color: '#0C0D34',
    fontSize: vw * 3.9,
  },
  progressSteps: {
    flex: 1,
    position: 'absolute',
    borderWidth: 1,
    width: '100%',
  },
  dashedBorder: {
    position: 'absolute',
    height: 0,
    width: '100%',
    marginHorizontal: vw * 5,
    marginTop: vw * 2.7,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ACACAC',
  },
  viewSignIn: {
    width: vw * 17,
    height: vh * 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginVertical: vh,
    color: 'black',
    fontSize: vw * 5,
  },
  description: {
    color: 'black',
    fontSize: vw * 3.6,
  },
  inputView: {},
  signIn: {
    width: '85%',
    height: vh * 5,
    marginVertical: vh,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: vw * 10,
    // borderWidth: 1,
  },
  textSignTwo: {
    // fontFamily: fonts.WorkSans.SemiBold,
    fontSize: vw * 3.4,
    color: '#0C0D34',
  },
  button: {
    marginBottom: vh * 16,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '76%',
    borderRadius: vw * 10,
    height: vh * 7,
  },
  deleteBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '76%',
    borderRadius: vw * 10,
    height: vh * 7,
    marginTop: vh * 2,
  },
  btnText: {
    fontSize: vw * 4.5,
    // marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },
  linkBtnContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: vh,
  },
  successCircle: {
    flex: 1,
    alignSelf: 'center',
    marginTop: vh * 7,
    justifyContent: 'center',
    backgroundColor: '#F5EBDC',
    borderRadius: (vw * 24) / 2,
    width: vw * 24,
    height: vw * 24,
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
  textHead: {
    fontSize: vw * 5.5,
    color: 'black',
    textAlign: 'center',
  },
  lightText: {
    marginTop: vh,
    fontSize: vw * 4,
    color: '#B1B1B1',
    textAlign: 'center',
  },

  prodImage: {
    resizeMode: 'contain',
    width: vw * 4,
    height: vw * 4,
  },
  gradBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 8,
    height: vw * 8,
    borderRadius: (vw * 8) / 2,
  },
  roundBtn: {
    backgroundColor: '#ACACAC',
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 8,
    height: vw * 8,
    borderRadius: (vw * 8) / 2,
  },
  inputRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  radioContainer: {
    flex: 1,
    marginTop: vh * 2,
  },
  headerStyleThree: {
    marginTop: vh * 1.5,
    width: vw * 45,
  },
  summaryContainer: {
    flex: 1,
    marginTop: vh * 2,
    borderColor: '#ACACAC',
    borderWidth: 1,
    borderRadius: vw * 2,
    padding: vh * 2,
    paddingVertical: vh * 3,
  },
  summaryContainerInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh * 3,
  },
  summaryText: {
    fontSize: vw * 3,
    color: 'black',
  },
  summaryTotal: {
    fontSize: vw * 4.5,
    color: 'black',
  },
  cardContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  backgroundWrapper: {
    flex: 1,
  },
  backgroundImg: {
    // flex: 1,
    width: vw * 45 * 2,
    height: vw * 44,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  backgroundSubContainer: {
    flex: 1,
    margin: vw * 5,
  },
  visa: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: vw,
  },
  visaImg: {
    width: vw * 10,
    height: vw * 10,
    resizeMode: 'contain',
  },
  cardNumberView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardNumber: {
    fontSize: vw * 5,
    color: 'white',
  },
  cardDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardDetailView: {
    flex: 1,
  },
  cardTitle: {
    fontSize: vw * 2.8,
    color: 'white',
  },
  cardUser: {
    fontSize: vw * 4.5,
    color: 'white',
  },
  gitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 8,
  },
  giftView: {},
  giftImg: {
    resizeMode: 'contain',
    width: vw * 50,
    height: vw * 50,
  },
  congrats: {
    fontSize: vw * 13,
    color: 'black',
  },
  congDesc: {
    fontSize: vw * 3.5,
  },

  popupBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: vh * 4,
    marginBottom: vh * 4,
  },
  porpupBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: theme.red + 'cc',
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
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  roundText: {
    fontSize: vw * 4.5,
    marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: 'black',
  },
  porpupBtnText: {
    fontSize: vw * 4.5,
    marginVertical: vh * 1.7,
    //letterSpacing: 0,
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;

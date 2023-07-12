import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw, DEVICE_WIDTH} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },

  searchView: {
    flexDirection: 'row',
    width: 100 * vw,
    justifyContent: 'space-between',
    resizeMode: 'contain',
    height: 30 * vh,
    backgroundColor: theme.lightBlack,
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 5 * vw,
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 5 * vw,
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground,
    marginRight: 28 * vw,
  },

  listView: {
    backgroundColor: theme.whiteBackground,
    height: 100 * vh,
    bottom: 75 * vh,
    borderTopRightRadius: 15 * vw,
    width: 100 * vw,
  },

  searchRowContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 80 * vw,
    justifyContent: 'space-between',
  },

  rowContainer: {
    flexDirection: 'row',
    width: 90 * vw,
    justifyContent: 'space-between',
    marginLeft: 5 * vw,
    bottom: vh * 4,
  },

  orderDetails: {
    width: 90 * vw,
    height: 5 * vh,
    marginLeft: 8 * vw,
    backgroundColor: 'red',
    // position: 'absolute',
    // top: 18 * vh,
  },

  yourOrderTextStyle: {
    fontSize: 2 * vh,
    fontFamily: Fonts.MSW,
    color: theme.whiteBackground,
  },

  orderNumberTextStyle: {
    fontSize: 2.2 * vh,
    fontFamily: Fonts.SFR,
    color: theme.whiteBackground,
  },

  applyButtonView: {
    width: 25 * vw,
    backgroundColor: theme.black,
    right: 5 * vw,
    borderRadius: 0,
  },

  textInputStyle: {
    marginLeft: 4 * vw,
    width: 55 * vw,
    color: theme.defaultBackgroundColor,
  },

  mainVoucherContainer: {
    flexDirection: 'row',
    width: 80 * vw,
    alignSelf: 'center',
    borderWidth: 0.5 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
    height: vh * 7,
  },

  checkoutButton: {
    width: 70 * vw,
    marginTop: 4 * vh,
    // width: 100 * vw,
    // height: 8 * vh,
    // borderTopRightRadius: 8 * vw,
    // borderTopLeftRadius: 8 * vw,
    // backgroundColor: theme.activeTextInputColor,
    // position: 'absolute',
    // bottom: 0,
  },

  flatListStyle: {
    maxHeight: 40 * vh,
    marginRight: 5 * vw,
    marginTop: vh * 2,
  },

  emptyComponentViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5 * vh,
  },

  borderLineView: {
    backgroundColor: 'lightgray',
    height: 0.2 * vh,
    width: 80 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 2 * vh,
  },

  numberOfTotalsItemsView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 4 * vh,
  },

  mainShippingRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 4 * vh,
    marginBottom: 2 * vh,
  },

  mainDiscountRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
  },

  connectionView: {
    height: 0.2 * vh,
    width: 30 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
  },

  shippingConnectionView: {
    height: 0.2 * vh,
    width: 50 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgray',
  },

  subtotalTextStyle: {
    color: 'gray',
    fontSize: 2 * vh,
  },

  totalAmountTextStyle: {
    fontSize: 2 * vh,
  },

  totalPriceView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80 * vw,
    marginTop: 4 * vh,
    alignItems: 'center',
    alignSelf: 'center',
  },

  totalTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.2 * vh,
    color: theme.black,
  },

  amountTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.2 * vh,
  },

  rightArrowIconView: {
    justifyContent: 'center',
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: theme.whiteBackground,
  },

  proceedToCheckBtnStyle: {
    width: vw * 100,
    height: Platform.OS === 'android' ? vh * 10 : vh * 8,
    zIndex: -10,
    backgroundColor: theme.defaultBackgroundColor,
    marginTop: Platform.OS === 'android' ? vh * 6 : vh * 1,
    borderTopLeftRadius: vw * 8,
    borderTopRightRadius: vw * 8,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   subContainer: {
//     flex: 1,
//     // height: "85%",
//     width: DEVICE_WIDTH - 40,
//   },
//   searchView: {
//     // flex: 1,
//     marginVertical: vh * 3,
//     height: vh * 6,
//   },
//   searchViewInner: {
//     width: '100%',
//     height: vh * 6.5,
//     flexDirection: 'row',
//     paddingVertical: vw * 1.8,
//     paddingHorizontal: vh * 1.8,
//     backgroundColor: theme.whiteBackground,
//     borderRadius: vw * 10,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   searchIcon: {
//     marginVertical: 2,
//     width: vw * 6,
//     height: vw * 6,
//   },
//   searchInput: {
//     paddingLeft: vw * 3,
//     paddingVertical: vh,
//     fontFamily: Fonts.SFD,
//     fontSize: vw * 3.2,
//   },
//   searchResView: {
//     flex: 1,
//   },
//   searchTxt: {
//     marginVertical: vh,
//     color: theme.black,
//     fontSize: vw * 5,
//   },
//   tagView: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },

//   tag: {
//     alignSelf: 'flex-start',
//     padding: vh * 3,
//     marginRight: vw * 3,
//     marginBottom: vh * 2,
//     backgroundColor: theme.lightGrayColor,
//   },
//   tagTxt: {
//     textAlign: 'center',
//     color: theme.black,
//     fontSize: vw * 2.8,
//   },
//   productDetail: {
//     // position: 'absolute',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // bottom: 0,
//     height: '48%',
//     marginVertical: vh * 6,
//     width: DEVICE_WIDTH - 40,
//   },
//   productsView: {
//     flex: 1,
//     width: '90%',
//   },
//   productHead: {
//     flex: 1,
//     height: vh * 7,
//     // position: 'absolute',
//     width: '100%',
//     flexDirection: 'row',
//   },
//   productHeadTxt: {
//     fontSize: vw * 5,
//     color: theme.black,
//   },
//   productHeadAll: {
//     fontSize: vw * 3.4,
//     color: theme.lightGrayColor,
//   },
//   touchViewAll: {
//     position: 'absolute',
//     right: 0,
//   },
//   cards: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: vh * 6,
//     borderBottomColor: theme.lightGrayColor,
//     borderBottomWidth: 1,
//   },

//   priceDescView: {
//     flex: 1,
//     justifyContent: 'center',
//     borderBottomColor: theme.lightGrayColor,
//     borderBottomWidth: 1,
//     // alignItems: 'center'
//   },
//   priceView: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: vh * 4,
//   },
//   priceTitle: {
//     fontSize: vw * 4.5,
//     color: theme.grayColor,
//   },
//   breakLine: {
//     fontSize: vw * 3.5,
//     color: theme.grayColor,
//     marginHorizontal: vw * 3,
//   },
//   priceCash: {
//     fontSize: vw * 4.5,
//     color: theme.black,
//   },
//   priceTotalView: {
//     flex: 1,
//     justifyContent: 'center',
//     marginTop: vh * 3,
//   },
//   submitProdView: {
//     flex: 1,
//     marginBottom: vh * 10,
//   },
//   roundBtn: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     width: '65%',
//     borderRadius: vw * 10,
//     height: vh * 5.5,
//   },
//   GradientText: {
//     position: 'absolute',
//     left: vw * 4.5,
//     fontSize: vw * 3.5,
//     marginVertical: vh * 1.7,
//     color: theme.whiteBackground,
//   },
//   successCircle: {
//     flex: 1,
//     marginTop: vh * 7,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     backgroundColor: '#FFB3AE',
//     borderRadius: (vw * 24) / 2,
//     width: vw * 24,
//     height: vw * 24,
//   },
//   successImg: {
//     width: vw * 10,
//     height: vw * 10,
//     alignSelf: 'center',
//     resizeMode: 'contain',
//     tintColor: theme.black,
//   },
//   textView: {
//     marginTop: vh * 3,
//     justifyContent: 'center',
//     alignSelf: 'center',
//   },
//   textHead: {
//     fontSize: vw * 6.5,
//     color: theme.black,
//     textAlign: 'center',
//   },
//   lightText: {
//     marginTop: vh,
//     fontSize: vw * 4,
//     color: theme.lightGray,
//     textAlign: 'center',
//   },
//   button: {
//     flex: 1,
//     // borderColor: 'red',
//     // borderWidth: 1,
//     flexDirection: 'row',
//     marginTop: vh * 4,
//     marginBottom: vh * 4,
//   },
//   btn: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     width: '100%',
//     borderRadius: vw * 10,
//     height: vh * 7,
//     paddingRight: vw * 3,
//   },
//   roundBlank: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     // width: "20%",
//     borderRadius: vw * 10,
//     height: vh * 7,
//     borderColor: theme.black,
//     borderWidth: 1,
//   },
//   roundText: {
//     fontSize: vw * 4.5,
//     marginVertical: vh * 1.7,
//     //letterSpacing: 0,
//     textAlign: 'center',
//     color: theme.black,
//   },
//   btnText: {
//     fontSize: vw * 4.5,
//     marginVertical: vh * 1.7,
//     //letterSpacing: 0,
//     textAlign: 'center',
//     color: theme.whiteBackground,
//   },
//   dashedBorder: {
//     flex: 1,
//     height: 0,
//     marginHorizontal: vw * 5,
//     marginTop: vw * 2.8,
//     borderWidth: 1,
//     borderStyle: 'dashed',
//     borderColor: theme.lightGrayColor,
//     // borderRadius: 1,
//   },
// });

export default styles;

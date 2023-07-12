import {Platform, StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    // bottom: vh * 18,
    // width: '20%',
    // backgroundColor: 'red',
    // height: vh * 50,
    // paddingVertical: vh *30
    // backgroundColor: 'red',
  },
  content: {
    alignItems: 'center',
    // backgroundColor: 'yellow',
    paddingTop: vh * 18,
  },

  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5.7 * vh,
    width: 5.7 * vw,
  },
  productImageContainerStyle: {
    height: 14 * vh,
    width: 28 * vw,
    borderRadius: vh * 3,
    backgroundColor: theme.whiteBackground,
  },
  categoryCartViewStyle: {
    flexDirection: 'row',
    width: 34 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },
  cartTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIconStyle: {
    resizeMode: 'contain',
    height: 4.8 * vh,
    width: 4.8 * vw,
  },

  filterIconStyle: {
    resizeMode: 'contain',
    height: 4.2 * vh,
    width: 4.2 * vw,
  },

  clothingStoreTextStyle: {
    color: theme.whiteBackground,
    fontSize: 3 * vh,
    fontFamily: Fonts.MSW,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mainHeaderContainer: {
    marginTop: 6 * vh,
    // width: 90 * vw,
    marginHorizontal: vw * 4,
    justifyContent: 'center',
  },

  mainHeaderView: {
    backgroundColor: theme.defaultTextColor,
    height: vh * 40,
    width: vw * 100,
    borderBottomLeftRadius: vh * 5,
    borderBottomRightRadius: vh * 5,
    position: 'absolute',
  },

  sliderView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderBannerView: {
    height: 33 * vh,
    marginTop: vh * 22,
    // backgroundColor: 'blue',
    // bottom: vh * 15,
  },
  dotStylePagination: {
    width: Platform.OS === 'android' ? 3 * vw : 2 * vw,
    height: Platform.OS === 'android' ? 3 * vw : 2 * vw,
    borderRadius: 2 * vw,
    marginRight: -vw * 4,
    backgroundColor: theme.defaultForgotPasswordColor,
    borderWidth: 0.5 * vw,
    borderColor: 'transparent',
  },

  inactiveDotStylePagination: {
    width: 4 * vw,
    height: 4 * vw,
    borderRadius: 2 * vw,
    backgroundColor: theme.black,
    // marginHorizontal: 2 * vw,
    borderColor: 'transparent',
  },

  containerStylePagination: {
    // bottom: 2 * vh,
    // backgroundColor: 'yellow',
    // height: vh * 5,
  },

  rowForCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    marginBottom: 2 * vh,
    bottom: 28 * vh,
  },

  rowForMainCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    marginBottom: 2 * vh,
    bottom: 16 * vh,
  },

  rowForArivalCategories: {
    flexDirection: 'row',
    width: 85 * vw,
    justifyContent: 'space-between',
    bottom: vh * 24,
  },

  categoriesTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.3 * vh,
    color: theme.black,
  },

  categoriesTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewAllTextButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewAllTextButton: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
  },

  productImageStyle: {
    // resizeMode: '',
    height: 15 * vh,
    width: 32 * vw,
    borderRadius: 4 * vw,
  },

  mainProductView: {
    marginRight: 6 * vw,
    width: 32 * vw,
    height: 22 * vh,
    marginBottom: vh * 2,
    // backgroundColor: 'yellow',
  },

  cartGreenStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vw,
  },

  cartView: {
    flexDirection: 'row',
    width: 34 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 0.5 * vh,
    marginLeft: 2 * vw,
  },

  categoryCartView: {
    flexDirection: 'row',
    width: 40 * vw,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginRight: 8 * vw,
  },

  cartTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartGreenView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartTextStyle: {
    fontSize: 1.4 * vh,
    fontFamily: Fonts.SFR,
    width: 30 * vw,
    color: theme.black,
  },

  cartCategoryTextStyle: {
    color: theme.defaultAuthDescriptionColor,
    fontSize: 1.8 * vh,
    marginTop: 0.5 * vh,
  },

  cartCategoryTextStyle2: {
    color: theme.activeTextInputColor,
    fontSize: 1.4 * vh,
    marginTop: 0.5 * vh,
    fontWeight: 'bold',
    width: 24 * vw,
    // backgroundColor: 'red'
  },
  cartGreenView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 6 * vw,
    height: 6 * vw,
    borderRadius: 6 * vw,
    borderWidth: 0.1,
  },

  amountTextStyle: {
    color: theme.defaultForgotPasswordColor,
    fontFamily: Fonts.MSW,
    fontSize: 2.5 * vh,
    marginLeft: 3 * vw,
    marginTop: 0.5 * vh,
    right: 8 * vw,
  },

  headerIconButton: {
    width: 8 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    height: 5 * vh,
  },

  displayIconStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 2 * vw,
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  touchableButtonView: {
    marginHorizontal: 2 * vw,
    height: 10 * vh,
    width: 28 * vw,
    borderRadius: 1 * vw,
  },

  textStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.SFD,
    fontWeight: 'bold',
    fontSize: 1.6 * vh,
    position: 'absolute',
    top: 4 * vh,
    color: 'white',
    width: 20 * vw,
    textAlign: 'center',
  },

  purchasedProductsView: {height: 30 * vh, bottom: 25 * vh, width: 90 * vw},

  recommendedProductsView: {width: 90 * vw},

  drawerIconStyle: {
    resizeMode: 'contain',
    height: 7 * vh,
    width: 7 * vw,
  },

  linearGradient: {
    height: 10 * vh,
    // width: 40 * vw,
    borderRadius: 1 * vw,
  },

  cartBubbleIconStyle: {
    fontSize: 1.5 * vh,
    color: theme.activeTextInputColor,
  },

  cartBubbleView: {
    position: 'absolute',
    bottom: 3.5 * vh,
    left: 2.7 * vw,
    backgroundColor: theme.whiteBackground,
    width: 3 * vh,
    height: 3 * vh,
    borderRadius: (vh * 3) / 2,
    borderColor: theme.activeTextInputColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;

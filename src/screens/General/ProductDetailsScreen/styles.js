import {Platform, StyleSheet} from 'react-native';
import fonts, {Fonts} from '../../../assets/fonts';
import {DEVICE_WIDTH, vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  optionTextStyles: {
    textTransform: 'capitalize',
    color: theme.defaultTextColor,
    fontFamily: Fonts.SFR,
    fontSize: vh * 2,
  },

  variationsContainer: {
    backgroundColor: theme.whiteBackground,
    top: vh * 2,
    width: 40 * vw,
    height: 5 * vh,
    marginVertical: vh * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: vw * 0.1,
    borderColor: theme.grayColor2,
  },
  searchView: {
    flexDirection: 'row',
    marginTop: 6 * vh,
    width: 90 * vw,
    justifyContent: 'space-between',
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: -vw * 3,
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.KB,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground,
    marginRight: 20 * vw,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: vh * 4,
  },

  productDetailsStyle: {
    resizeMode: 'contain',
    height: 30 * vh,
    width: 90 * vw,
  },

  productImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  productNameViewWithAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productNameTextStyle: {
    fontSize: 3 * vh,
    fontFamily: Fonts.KB,
    color: theme.whiteBackground,
    marginLeft: vw * 2,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: vh * 4,
  },

  productDetailsNameTextStyle: {
    fontFamily: Fonts.MSW,
    color: theme.black,
    marginLeft: vw * 6,
    fontSize: vh * 3,
    marginTop: vh * 2,
    marginBottom: vh * 1.5,
    width: vw * 80,
  },

  productPriceTextStyle: {
    fontFamily: Fonts.MSW,
    color: theme.defaultBackgroundColor,
    marginLeft: vw * 6,
    fontSize: vh * 3,
    width: vw * 80,
    marginTop: vh * 2,
    bottom: vh * 1,
  },

  productAmountTextStyle: {
    fontFamily: Fonts.KB,
    fontSize: 2.4 * vh,
  },

  productDetailsView: {
    width: 90 * vw,
  },

  buttonView: {
    flexDirection: 'row',
    width: 40 * vw,
    height: 6 * vh,
    justifyContent: 'space-around',
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#EBEBEB',
    borderRadius: 1 * vw,
  },

  renderOptionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 5,
    bottom: vh * 3,
    marginHorizontal: vw * 6,
  },

  renderOptionDescStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: vh * 5,
    bottom: Platform.OS === 'android' ? vh * 17 : vh * 12,
    marginHorizontal: vw * 6,
  },

  mainButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4 * vh,
    width: 90 * vw,
    alignSelf: 'center',
    height: 20 * vh,
  },

  colorView: {
    backgroundColor: theme.defaultTextColor,
    height: 5 * vw,
    width: 5 * vw,
    borderRadius: 4 * vw,
  },

  mainDescriptionContainer: {
    marginTop: 1 * vh,
    width: 100 * vw,
    zIndex: -10,
    paddingHorizontal: 2 * vw,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },

  descriptionTextStyle: {
    fontSize: 1.7 * vh,
    fontFamily: Fonts.SFD,
    fontWeight: 'bold',
    marginBottom: 1 * vh,
  },

  descriptionView: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.6 * vh,
  },

  addToCartButtonMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4 * vh,
  },

  cartButton: {
    width: 100 * vw,
    height: 7 * vh,
    borderTopRightRadius: 8 * vw,
    borderTopLeftRadius: 8 * vw,
    backgroundColor: theme.activeTextInputColor,
    position: 'absolute',
    bottom: 0,
  },

  amountValueView: {
    backgroundColor: '#EEECEC',
    width: 28 * vw,
    height: 4 * vh,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    // borderRadius: 2 * vw,
    // elevation: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    right: vw * 20,
    // bottom: vh * 2,
  },

  increaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  decreaseAmountView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  valueView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 8 * vw,
  },

  icrementTextStyle: {
    fontSize: 2.5 * vh,
  },

  valueTextStyle: {
    fontSize: 2.2 * vh,
  },
  decrementTextStyle: {
    fontSize: 3.5 * vh,
  },

  mayAlsoLikeTextStyle: {
    fontFamily: Fonts.SFR,
    fontSize: 1.5 * vh,
    fontWeight: 'bold',
    marginBottom: 2 * vh,
  },

  recommendedProductsView: {
    marginTop: 3 * vh,
  },

  reviewsTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 1.6 * vh,
  },

  writeYoursTextStyle: {
    color: '#A3A3A3',
    fontSize: 1.6 * vh,
  },

  reviewsContainer: {
    flex: 1,

    alignSelf: 'center',
    backgroundColor: 'red',
  },

  writeYoursButtonView: {
    marginTop: 2 * vh,
    marginBottom: 1 * vh,
    justifyContent: 'center',
    width: 80 * vw,
  },

  postReviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  postView: {
    justifyContent: 'center',
    marginTop: 1 * vh,
  },

  //

  mainProductsContainerView: {
    flex: 1,
    zIndex: -10,
  },

  mainTabsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60 * vw,
    alignSelf: 'center',
    justifyContent: 'space-around',
    zIndex: -10,
    // backgroundColor: 'red',
    // bottom: vh * 5, // subjective
  },

  detailsTabView: {
    width: 28 * vw,
    height: 5 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.defaultAuthDescriptionColor,
    borderRadius: 1 * vw,
  },

  reviewsTabView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28 * vw,
    height: 5 * vh,
    borderRadius: 1 * vw,
    zIndex: -10,
  },

  detailsTextStyle: {
    fontSize: 1.8 * vh,
  },

  reviewsTabTextStyle: {
    fontSize: 1.8 * vh,
  },

  variationValueTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 1.8 * vh,
  },

  variationTextStyle: {
    fontSize: 2 * vh,
  },

  productNameView: {
    marginTop: 10 * vh,
    marginBottom: 4 * vh,
    width: 90 * vw,
    marginLeft: vw * 4,
  },

  cartButtonView: {
    width: 100 * vw,
    height: 8 * vh,
  },

  continueShoppingView: {
    position: 'absolute',
    top: vh * 58,
    left: 0,
  },

  rightArrowIconView: {
    justifyContent: 'center',
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
    tintColor: theme.black,
    marginLeft: vw * 4,
  },

  displayIconStyle: {
    resizeMode: 'contain',
    height: 6 * vh,
    width: 6 * vh,
    borderRadius: vh * 4,
    bottom: Platform.OS === 'android' ? vh * 1.4 : vh * -1,
  },

  noReviewsView: {
    alignSelf: 'center',
    marginTop: 4 * vh,
    marginBottom: 4 * vh,
  },

  displayView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    width: 100 * vw,
    height: 7 * vh,
    borderTopRightRadius: 8 * vw,
    borderTopLeftRadius: 8 * vw,
    backgroundColor: theme.activeTextInputColor,
  },

  mainReviewView: {
    height: 13 * vh,
    flexDirection: 'row',
    width: vw * 80,
  },

  nameTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 1.8 * vh,
  },

  reviewsDescriptionView: {
    width: 70 * vw,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
    color: theme.defaultInactiveBorderColor,
  },

  descriptionContainer: {},

  mainRowView: {
    justifyContent: 'center',
    marginLeft: 5 * vw,
    marginTop: 3 * vh,
  },

  nameView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameWithRatingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ratingMainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  writeYoursHeadingTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 1.8 * vh,
    marginLeft: vw * 4,
  },

  mainWriteRatingView: {
    paddingHorizontal: vw * 3,
  },

  textInputView: {
    borderBottomWidth: 0.1 * vw,
    marginTop: 4 * vh,
    marginBottom: 4 * vh,
    marginHorizontal: vh * 4,
  },

  textInputTextStyle: {
    fontSize: 2 * vh,
    color: theme.defaultInactiveBorderColor,
    fontFamily: Fonts.SFR,
  },

  writeRatingStyle: {
    marginTop: 2 * vh,
  },

  reviewButtonView: {
    width: 40 * vw,
    marginBottom: 1 * vh,
    backgroundColor: theme.lightBlack,
  },

  listView: {
    flex: 1,
    paddingTop: vh * 2,
  },

  counterViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: vh * 2,
  },

  variationMainContainer: {
    // bottom: vh * 8,
  },

  headerIconButton: {
    width: 8 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    height: 5 * vh,
    marginHorizontal: vw * 1,
  },

  cartIconStyle: {
    resizeMode: 'contain',
    height: 4.5 * vh,
    width: 4.5 * vw,
    tintColor: theme.black,
  },

  cartBubbleView: {
    position: 'absolute',
    bottom: 3.5 * vh,
    left: 2.7 * vw,
    backgroundColor: theme.activeTextInputColor,
    width: 3 * vh,
    height: 3 * vh,
    borderRadius: (vh * 3) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBubbleIconStyle: {
    fontSize: 1.5 * vh,
    color: theme.whiteBackground,
  },

  shadowProp: {
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: theme.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.41,
      },
    }),
  },
});

export default styles;

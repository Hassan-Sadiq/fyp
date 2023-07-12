import {StyleSheet, Platform} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    backgroundColor: theme.lightBlack,
  },

  scrollStyle: {
    paddingBottom: Platform.OS === 'android' ? vh * 440 : vh * 400,
    backgroundColor: theme.whiteBackground,
  },

  headerView: {
    marginHorizontal: vw * 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainHeaderView: {
    backgroundColor: theme.lightBlack,
    height: vh * 14,
    justifyContent: 'flex-end',
  },
  rightArrowIconView: {
    justifyContent: 'center',
  },
  textStyle: {
    marginHorizontal: vw * 2,
    color: theme.whiteBackground,
    fontSize: vh * 2.5,
  },
  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 6 * vh,
    width: 6 * vw,
  },
  searchView: {
    flexDirection: 'row',
    marginTop: 10 * vh,
    width: 90 * vw,
    justifyContent: 'space-between',
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
    color: theme.whiteBackground,
  },

  mainView: {
    backgroundColor: theme.whiteBackground,
    width: 100 * vw,
    height: 100 * vh,
    // marginTop: 4 * vh,
    // bottom: vh * 4,
  },

  headingContentTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
  },

  descriptionContentView: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
    marginTop: 1 * vh,
  },

  bulletPointTextStyle: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
    marginTop: 0.5 * vh,
    marginLeft: 1 * vw,
  },

  contentViewStyle: {
    width: 90 * vw,
    marginTop: 4 * vh,
    marginLeft: 5 * vw,
    marginBottom: 2 * vh,
  },

  headerStyle: {
    color: theme.whiteBackground,
    backgroundColor: theme.lightBlack,
    paddingHorizontal: vw * 2,
  },

  textHeadingViewStyle: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.KB,
    marginTop: 1 * vh,
  },
});
export default styles;

import {StyleSheet, Platform} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    height: vh * 100,
    backgroundColor: theme.whiteBackground,
  },
  content: {
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? vh * 12 : vh * 30,
  },

  searchView: {
    flexDirection: 'row',
    width: 100 * vw,
    height: 40 * vh,
    justifyContent: 'space-between',
    resizeMode: 'contain',
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

  listView: {
    backgroundColor: 'red',
    height: 100 * vh,
    bottom: 30 * vh,
    borderTopLeftRadius: 10 * vw,
    borderTopRightRadius: 10 * vw,
  },

  rowContainer: {
    flexDirection: 'row',
    width: 90 * vw,
    height: 50 * vw,
    justifyContent: 'space-between',
    marginLeft: 5 * vw,
  },

  contentView: {
    width: 100 * vw,
    backgroundColor: theme.whiteBackground,
    bottom: 20 * vh,
    // borderTopRightRadius: 15 * vw,
    height: 100 * vh,
  },

  headingContentTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
  },

  descriptionContentView: {
    color: theme.black,
    fontSize: 1.8 * vh,
    fontFamily: Fonts.SFR,
    marginTop: 1 * vh,
  },
  detailsContentView: {
    color: theme.defaultInactiveBorderColor,
    fontSize: 2.5 * vh,
    fontFamily: Fonts.SFR,
    marginTop: 1 * vh,
  },
  contentViewStyle: {
    width: 90 * vw,
    marginTop: 4 * vh,
    marginLeft: 5 * vw,
    alignItems: 'center',
  },
});
export default styles;

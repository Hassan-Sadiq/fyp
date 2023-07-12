import {StyleSheet} from 'react-native';
import {Fonts} from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },

  subContainer: {
    flexDirection: 'row',
    width: '50%',
  },
  mainView: {
    flex: 1,
    top: vh * 35,
  },
  mainViewIOS: {
    height: vh * 100,
    top: vh * 35,
  },
  searchView: {
    flexDirection: 'row',
    width: 100 * vw,
    height: 50 * vh,
    justifyContent: 'space-between',
    resizeMode: 'contain',
    backgroundColor: theme.whiteBackground,
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
    color: theme.black,
    marginLeft: 5 * vw,
  },

  listView: {
    width: vw * 90,
  },

  searchRowContainer: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90 * vw,
    height: 25 * vh,
    marginLeft: 5 * vw,
  },

  listEmptyComponentView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * vh,
  },

  leftArrowIconStyle: {
    resizeMode: 'contain',
    height: 7 * vh,
    width: 7 * vw,
  },

  leftArrowIconButton: {
    justifyContent: 'center',
  },

  renderListViewStyles: {
    marginBottom: vh * 4,
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

  subContainerTwoStyle: {
    marginTop: vh * 10,
  },
});
export default styles;

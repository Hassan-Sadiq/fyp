import {Platform, StyleSheet} from 'react-native';
import {vh, vw} from '../../../units/index';
import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    paddingTop: 7 * vh,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // paddingHorizontal: vw * 3,
    marginHorizontal: vw * 4,
  },

  searchTextStyle: {
    alignSelf: 'center',
    fontFamily: Fonts.KB,
    fontSize: 2.8 * vh,
    color: theme.lightBlack,
    marginRight: Platform.OS === 'android' ? vw * 58 : vw * 50,
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 7 * vw,
    height: 7 * vh,
    marginRight: vw * 6,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  drawerIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },

  drawerButtonView: {
    justifyContent: 'center',
    marginLeft: vw * 6,
    marginRight: vw * 1,
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

  extraIconStyle: {
    marginLeft: vw * 2,
    marginRight: vw * 4.5,
  },
});

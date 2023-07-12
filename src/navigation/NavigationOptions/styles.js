import {StyleSheet, Platform} from 'react-native';
import {Fonts} from '../../assets/fonts';
import {vh, vw} from '../../units';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  searchTextStyle: {
    fontFamily: Fonts.MSW,
    fontSize: Platform.OS === "android" ? 2.8 * vh : 2.8 * vh,
    color: theme.lightBlack,
  },
  drawerButtonView: {},
  drawerIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },

  headerIconButton: {
    width: 8 * vw,
    justifyContent: 'center',
    alignItems: 'center',
    height: 5 * vh,
    // marginHorizontal: vw * 1,
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

  searchIconButtonView: {},

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  filterScreenStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  drawerIconStyle: {
    resizeMode: 'contain',
    height: 5 * vw,
    width: 5 * vw,
  },
});
export default styles;

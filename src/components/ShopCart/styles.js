import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';
import { vh, vw} from '../../units';

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: vh * 3,
    // borderWidth: 1,
  },
  imgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // borderWidth: 1
  },
  cardImg: {
    height: vh * 22,
    width: vw * 30,
    resizeMode: 'cover',
  },
  prodDescView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: vh,
    borderColor: theme.ProductBgColor,
    borderWidth: 1,
    borderTopRightRadius: vw * 5,
    borderBottomRightRadius: vw * 5,
    padding: vw * 4,
    height: '80%',
  },
  descView: {
    flex: 1,
    width: '65%',
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
  delete: {
    resizeMode: 'contain',
    width: vw * 4,
    height: vw * 4,
    tintColor: theme.white,
  },
  descProdTxt: {
    fontSize: vw * 3.2,
    color: theme.lightBlack,
  },
  prodPriceTxt: {
    color: theme.ProdPriceColor,
    fontSize: vw * 4,
  },
  addTo: {
    position: 'absolute',
    right: vw * 2,
    top: vw * 2,
  },
  actionView: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: vh,
  },
  removeProdTxt: {
    resizeMode: 'contain',
    width: vw * 2,
    height: vw * 2,
    alignContent: 'center',
    alignSelf: 'center',
    tintColor: theme.white,
  },
  addProdTxt: {
    resizeMode: 'contain',
    width: vw * 2,
    height: vw * 2,
    alignContent: 'center',
    alignSelf: 'center',
    tintColor: theme.buttonColor,
  },
  roundRemove: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: vw * 6,
    height: vw * 6,
    borderRadius: (vw * 6) / 2,
    backgroundColor: theme.buttonColor,
  },
  cartCountTxt: {
    alignSelf: 'center',
    marginHorizontal: vw * 3,
    fontSize: vw * 3,
    color: theme.black,
  },
  roundAdd: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: vw * 6,
    height: vw * 6,
    borderRadius: (vw * 6) / 2,
    backgroundColor: theme.white,
    borderColor: theme.buttonColor,
    borderWidth: 2,
  },
});

export default styles;

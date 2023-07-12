import {StyleSheet, Platform} from 'react-native';
import {vw} from '../../../units';
const styles = StyleSheet.create({
  mainViewOrderScreenStyle: {justifyContent: 'center', alignItems: 'center'},
  headerStyle: {
    paddingLeft: Platform.OS === 'android' ? vw * 0 : vw * 2,
  },
});
export default styles;

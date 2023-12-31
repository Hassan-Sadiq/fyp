import {StyleSheet, Platform} from 'react-native';
import {vh, vw} from '../../../units';
const styles = StyleSheet.create({
  mainScreenView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5 * vh,
  },

  containerView: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
  },

  subjectTextStyleWithSpace: {
    marginTop: 2 * vh,
  },

  valueTextStyle: {fontSize: 1.8 * vh, marginTop: 0.5 * vh},

  dateView: {paddingRight: 10 * vw},
  headerStyle: {
    // paddingLeft: Platform.OS === 'android' ? vw * 0 : vw * 5,
  },
});
export default styles;

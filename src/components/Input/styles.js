import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';
import {vh, vw} from '../../units';


const styles = StyleSheet.create({
  textInput: {
    width: vw * 80,
    height: vh * 6,
    color: theme.black,
    // fontWeight: fonts.fontWeightNormal
    // fontFamily: fonts.Eurostile.Bold,
  },
});

export default styles;
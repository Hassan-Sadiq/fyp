import {StyleSheet} from 'react-native';
import {vh, vw} from '../../units';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  inputBox: {
    //flex: 1,
    marginTop: vh * 2,
  },
  inputText: {
    color: 'black',
    fontSize: vw * 3.6,
    marginLeft: vw * 5,
  },
  astericStyle: {
    color: theme.red,
  },
  textInput: {
    marginVertical: vh,
    height: vh * 6.5,
    borderRadius: vw * 10,
    borderColor: '#C9C9C9',
    borderWidth: 1,
    // fontFamily: fonts.WorkSans.Regular,
    // fontWeight: fonts.WorkSans.fontWeightNormal,
    fontSize: vw * 3.1,
    paddingLeft: vw * 5,
    color: '#666666',
  },
  icon: {
    height: vh * 3,
    width: vh * 3,
  },
});

export default styles;

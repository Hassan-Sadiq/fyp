import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';
import {vh, vw} from '../../units';

const styles = StyleSheet.create({
  container: {
    marginBottom: vh * 4,
    height: vh * 8,
    justifyContent: 'center',

    alignItems: 'center',
    width: vw * 30,
    backgroundColor: theme.defaultForgotPasswordColor,
    borderRadius: vw * 6,
  },
  activeContainer: {
    marginBottom: vh * 4,
    height: vh * 8,
    justifyContent: 'center',

    alignItems: 'center',
    width: vw * 30,
    backgroundColor: theme.whiteBackground,
    borderRadius: vw * 6,
    borderColor: '#BEBEBE',
    borderWidth: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 30,
    borderRadius: vw * 2,
  },
  activeRadioText: {
    // marginLeft: vw * 3,
    fontSize: vw * 2.9,
    color: theme.whiteBackground,
  },
  radioText: {
    // marginLeft: vw * 3,
    fontSize: vw * 2.9,
    color: theme.black,
  },
  radioCircle: {
    height: vw * 6,
    width: vw * 6,
    borderRadius: (vw * 6) / 2,
    borderWidth: 2,
    borderColor: theme.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: vw * 3,
    height: vw * 3,
    borderRadius: (vw * 3) / 2,
    backgroundColor: theme.defaultActiveBorderColor,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: vw * 8,
    height: vw * 7,
  },
  img: {
    width: vw * 4,
    height: vw * 4,
    resizeMode: 'contain',
  },
});

export default styles;

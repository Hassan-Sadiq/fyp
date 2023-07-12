import {StyleSheet, Dimensions} from 'react-native';
import {vh, vw} from '../../../units';

const DEVICE_WIDTH = Dimensions.get('window').width;
// import { colors } from '../../utils/theme';
// import { DEVICE_WIDTH, vh, vw} from '../../utils/units';
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  blurBackground: {
    position: 'absolute',
    //zIndex: -9999999,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  blurView: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: DEVICE_WIDTH,
    // height: "60%",
    // borderWidth: 1,
  },
  modalSubContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: vw * 10,
    borderTopRightRadius: vw * 10,
    paddingHorizontal: vh * 5,
    paddingTop: vh * 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  progressSteps: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopColor: 'C9C9C9',
    borderTopWidth: 5,
    borderRadius: vw * 10,
    width: vw * 30,
    height: 0,
  },
  close: {
    position: 'absolute',
    right: 0,
    margin: vh,
    width: vw * 10,
  },
  closeText: {
    width: vw * 10,
    height: vw * 5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  modalContent: {
    flex: 1,
    width: vw * 100,
    height: vh * 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;

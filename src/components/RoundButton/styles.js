import {StyleSheet} from 'react-native';
import  theme  from '../../utils/theme';
import { DEVICE_WIDTH, vh, vw } from '../../units';

const styles = StyleSheet.create({
    iconRound: {
        position: 'absolute',
        right: vw*2,
        justifyContent: 'center',
        alignItems: 'center',
        width: vw*6, 
        height: vw*6, 
        borderRadius: (vw*6)/2,
        backgroundColor: theme.whiteBackground
    },
    prodImage: {
        resizeMode: 'contain',
        width: vw*2.8,
        height: vw*2.8,
    },
    close: {
        flex: 1,
        position: 'absolute',
        right: vw*3.5,
        justifyContent: 'center',
        alignSelf: 'center',
        width: vw*3, 
        height: vw*3, 
    }
})

export default styles;
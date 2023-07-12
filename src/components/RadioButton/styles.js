
import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';
import {vh, vw} from '../../units';

const styles = StyleSheet.create({
	container: {
        // marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        marginLeft: vw*3,
        fontSize: vw*3.5,
        color: theme.black,
    },
    radioCircle: {
        height: vw*6,
        width: vw*6,
        borderRadius: (vw*6)/2,
        borderWidth: 2,
        borderColor: theme.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: vw*3,
        height: vw*3,
        borderRadius: (vw*3)/2,
        backgroundColor: theme.themeColor,
    },
})

export default styles;
import React, {useState} from 'react';
import {icons} from '../../assets';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/theme';
import TextWrapper from '../../components/TextWrapper';
import styles from './styles';

const RadioButton = props => {
    const [value, setValue] = useState(props.radioVal)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => props.setRadioVal(props.uniqKey)}
            >
                {props.radioVal === props.uniqKey && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <TextWrapper style={styles.radioText}>{props.text}</TextWrapper>
        </View>
    );
}

export default RadioButton;
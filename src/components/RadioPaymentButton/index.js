import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {vh, vw} from '../../units';

import TextWrapper from '../TextWrapper';

const RadioPaymentButton = props => {
  const [value, setValue] = useState(props.radioVal);

  return (
    <View
      style={
        props.radioVal === props.uniqKey
          ? styles.container
          : styles.activeContainer
      }>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => props.setRadioVal(props.uniqKey)}>
        <View style={styles.imgView}>
          <Image source={props.icon} style={styles.img} />
        </View>
        <TextWrapper
          style={
            props.radioVal === props.uniqKey
              ? styles.activeRadioText
              : styles.radioText
          }>
          {props.text}
        </TextWrapper>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.radioCircle}
        onPress={() => props.setRadioVal(props.uniqKey)}>
        {props.radioVal === props.uniqKey && <View style={styles.selectedRb} />}
      </TouchableOpacity> */}
    </View>
  );
};

export default RadioPaymentButton;

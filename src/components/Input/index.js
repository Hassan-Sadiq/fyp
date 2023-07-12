import React from 'react';
import {TextInput} from 'react-native';
import theme from '../../utils/theme';
import styles from './styles';

const TextInputHOC = props => {
  return (
    <TextInput
      placeholderTextColor={theme.defaultInactiveBorderColor}
      underlineColorAndroid="rgba(0,0,0,0)"
      autoCapitalize="none"
      textAlignVertical="top"
      {...props}
      style={[styles.textInput, props?.textInputStyle]}
    />
  );
};

export default TextInputHOC;
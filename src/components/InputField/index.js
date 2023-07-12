import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';

const InputField = props => {
  return (
    <View style={[styles.inputBox, props.viewStyle]}>
      {props?.asteric ? (
        <View style={{flexDirection: 'row'}}>
          <TextWrapper style={[styles.inputText, props.inputText]}>
            {props.text}
          </TextWrapper>
          <TextWrapper style={styles.astericStyle}>*</TextWrapper>
        </View>
      ) : (
        <TextWrapper style={styles.inputText}>{props.text}</TextWrapper>
      )}
      {/* <TextInputHOC
            {...props}
            textInputStyle={[
                styles.textInput,
                props?.textInput,
            ]}
            secureTextEntry={props.secureTextEntry}
            /> */}
      <TextInput
        {...props}
        // placeholderTextColor={input.placeholderTextColor}
        // placeholder={input.placeholder}
        style={[styles.textInput, props.style]}
        // value={input.value}
        // autoCapitalize={input.autoCapitalize}
        // onChangeText={input.onChangeText}
        secureTextEntry={false || props.secureTextEntry}
      />
    </View>
  );
};

export default InputField;

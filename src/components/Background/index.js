import React from 'react';
import {ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {generalImages} from '../../assets/images';
import styles from './styles';

const BackgroundWrapper = props => {
  return (
    <ImageBackground
      source={props.background ? props?.background : generalImages.backgroundImage}
      style={[styles.container, props?.style]}
      imageStyle={props?.imageStyle}
      {...props}>
      {props.scroll ? (
        <KeyboardAwareScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          {props.children}
        </KeyboardAwareScrollView>
      ) : (
        props.children
      )}
    </ImageBackground>
  );
};

export default BackgroundWrapper;

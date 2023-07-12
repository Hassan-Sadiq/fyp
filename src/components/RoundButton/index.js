import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {icons} from '../../assets/images/index';
import WorkSansRegular from '../TextWrapper';
import styles from './styles';

const RoundButton = props => {
  if (props.isIcon) {
    return (
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        {props.children}
      </TouchableOpacity>
    );
  }
  if (props.forwardIcon) {
    return (
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        <WorkSansRegular style={props.textStyle}>{props.text}</WorkSansRegular>
        <View style={styles.iconRound}>
          <Image source={icons.arrowRightThem} style={styles.prodImage} />
        </View>
      </TouchableOpacity>
    );
  }
  if (props.tag) {
    return (
      <View style={props.style} onPress={props.onPress}>
        <WorkSansRegular style={props.textStyle}>{props.text}</WorkSansRegular>
        <TouchableOpacity style={styles.close}>
          <Image source={icons.closeWhite} style={styles.prodImage} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity style={props.style} onPress={props.onPress}>
        <WorkSansRegular style={props.textStyle}>{props.text}</WorkSansRegular>
      </TouchableOpacity>
    );
  }
};
export default RoundButton;

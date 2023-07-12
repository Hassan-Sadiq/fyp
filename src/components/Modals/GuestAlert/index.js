import React from 'react';
import {View, Modal, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../../units/index';
import {icons} from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import theme from '../../../utils/theme';

const GuestAlert = props => {
  const navigation = useNavigation();

  const handleOnPressLogin = () => {
    navigation.replace('SignInScreen');
  };

  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{flex: 1}}>
      <BlurView style={styles.blurViewStyle} blurType="dark" blurAmount={40} />
      <View style={styles.alertMainView}>
        <View style={styles.checkIconView}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: vh * 2,
            }}>
            <View
              style={{
                backgroundColor: theme.grayText2,
                height: vh * 0.5,
                width: vw * 22,
              }}></View>
          </View>
          <View style={styles.tickView}>
            <Image source={icons.questionMark} style={styles.checkIconStyle} />
          </View>
          <TextWrapper style={styles.customAlertHeadingTextStyle}>
            Please login to access
          </TextWrapper>

          <View style={styles.choiceButtonView}>
            <SubmitButton
              style={styles.noButtonView}
              textStyle={styles.noTextStyle}
              title={'Login'}
              onPress={() => handleOnPressLogin()}
            />
            <SubmitButton
              style={styles.yesButtonView}
              textStyle={styles.yesTextStyle}
              title={'Back'}
              onPress={props?.onHide}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GuestAlert;

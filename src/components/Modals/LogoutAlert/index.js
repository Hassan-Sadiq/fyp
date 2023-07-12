import React from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../../units/index';
import {icons} from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import {useNavigation} from '@react-navigation/core';
import styles from './styles';
import {useLogoutHook} from '../../../hooks/useLogoutHook';
import theme from '../../../utils/theme';

const LogoutAlert = props => {
  const navigation = useNavigation();
  const [logoutState, logoutFunc] = useLogoutHook();

  const logout = () => {
    logoutFunc();
    props.setVisibility(false);
  };

  return (
    <Modal
      transparent={true}
      visible={props.visibility ? props.visibility : false}
      style={{flex: 1}}>
      <BlurView style={styles.blurViewStyle} blurType="dark" blurAmount={40} />
      <View style={styles.alertMainView}>
        {/* <TouchableOpacity style={styles.crossIconView}>
          <Image source={icons.cross} style={styles.crossIconStyle} />
        </TouchableOpacity> */}

        {/* <View style={styles.barViewStyle}></View> */}

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
          <TextWrapper
            numberOfLines={2}
            style={styles.customAlertHeadingTextStyle}>
            Are you sure you want to logout?
          </TextWrapper>

          {/* <TextWrapper style={styles.customAlertDescriptionTextStyle}>
            Close This Window And Login
          </TextWrapper> */}

          <View style={styles.choiceButtonView}>
            <SubmitButton
              style={styles.noButtonView}
              textStyle={styles.noTextStyle}
              title={'Yes'}
              onPress={() => logout()}
            />
            <SubmitButton
              style={styles.yesButtonView}
              textStyle={styles.yesTextStyle}
              title={'No'}
              onPress={props?.onHide}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutAlert;

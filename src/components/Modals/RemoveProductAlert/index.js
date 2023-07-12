import React from 'react';
import {Text, View, Modal, Image, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../../units/index';
import {icons} from '../../../assets/images/index';
import TextWrapper from '../../TextWrapper/index';
import SubmitButton from '../../Buttons/SubmitButton/index';
import styles from './styles';
import {useDeleteFromCartHook} from '../../../hooks/useDeleteFromCartHook';
import theme from '../../../utils/theme';

const RemoveProductAlert = props => {
  const [removeCartItemState, removeFromCartFunc] = useDeleteFromCartHook();
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
          <Text style={styles.customAlertHeadingTextStyle}>
            Are You Sure You Want To Remove Product From The Cart?
          </Text>

          <View style={styles.choiceButtonView}>
            <SubmitButton
              title="YES"
              style={styles.noButtonView}
              textStyle={styles.noTextStyle}
              onPress={() => {
                removeFromCartFunc(props?.deleteItem);
                setTimeout(() => {
                  props?.noButtonOnPress();
                }, 200);
              }}
            />
            <SubmitButton
              style={styles.yesButtonView}
              textStyle={styles.yesTextStyle}
              title={'No'}
              onPress={props?.noButtonOnPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveProductAlert;

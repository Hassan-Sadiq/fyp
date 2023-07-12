import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import InputField from '../../../components/InputField';
import theme from '../../../utils/theme';
import styles from './styles';
import GradientButton from '../../../components/Buttons/SubmitButton';
import WorkSansMedium from '../../../components/TextWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import {requestDeleteAction} from '../../../redux/actions/contactUsActions';
import {showToast} from '../../../redux/Api/HelperFunction';
import ModalView from '../../../components/Modals/Modal';
import {icons} from '../../../assets/images';

import MainContainer from '../../../components/Containers/MainContainer';
import {deleteUser} from '../../../redux/actions/profileActions';

const RequestDeleteScreen = props => {
  const user = useSelector(
    state => state.authReducer?.customer,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState(user?.email ? user?.email : '');
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('Request for deleting account');
  const [message, setMessage] = useState('');
  // const handleContactUs = () => {
  //   console.log('handle ConatctUs');
  //   const data = {
  //     email: user?.email,
  //     subject: subject,
  //     message: message ? message : 'Request for deleting account',
  //   };
  //   try {
  //     dispatch(requestDeleteAction(data)).then(res => {
  //       setIsVisible(!isVisible);
  //       props.navigation.goBack();
  //     });
  //   } catch (e) {
  //     showToast(e);
  //   }
  // };
  const handleDelete = () => {
    try {
      dispatch(deleteUser(user.id)).then(res => {
        setIsVisible(!isVisible);
      });
    } catch (error) {
      showToast(error);
    }
  };
  return (
    <MainContainer
      style={{
        flex: 1,
        backgroundColor: theme.whiteBackground,
        justifyContent: 'space-around',
      }}>
      <View style={styles.container}>
        
        <KeyboardAwareScrollView style={styles.subContainer}>
        {isVisible && (
          <ModalView
            close={true}
            isVisible={isVisible}
            setIsVisible={() => setIsVisible(!isVisible)}>
            <Image source={icons.questionMark} style={styles.successImg} />
            <View style={styles.textView}>
              <WorkSansMedium style={styles.textHead}>
                Are You Sure
              </WorkSansMedium>
              <WorkSansMedium style={styles.textHead}>
                you want to send
              </WorkSansMedium>
              <WorkSansMedium style={styles.textHead}>
                Delete request?
              </WorkSansMedium>
            </View>
            <View style={styles.popupButton}>
              {/* <GradientButton
                style={styles.popupBtn}
                textStyle={styles.popupBtnText}
                text={'Yes'}
                colors={theme.black}
                onPress={handleContactUs}
              /> */}
              <GradientButton
                onPress={handleDelete}
                style={styles.popupBtn}
                title="Yes"
              />
              <GradientButton
                onPress={() => setIsVisible(false)}
                style={styles.roundBlank}
                title="No"
              />
              {/* <RoundButton
                style={styles.roundBlank}
                textStyle={styles.roundText}
                text={'No'}
                onPress={() => setIsVisible(false)}
              /> */}
            </View>
          </ModalView>
        )}

          <View style={styles.headerView}>
            <View style={styles.headerStyleTwo}>
              <WorkSansMedium style={styles.welcome}>
              Request Delete Form
              </WorkSansMedium>
            </View>
          </View>

          <View style={styles.inputView}>
            <InputField
              text={'Email'}
              style={{
                backgroundColor: theme.themeBlueColor + '22',
                color: theme.defaultInactiveBorderColor,
              }}
              placeholder="Enter Email"
              editable={false}
              value={user?.email}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <InputField
              text={'Subject'}
              style={{
                backgroundColor: theme.themeBlueColor + '22',
                color: theme.defaultInactiveBorderColor,
              }}
              editable={false}
              placeholder="Enter Subject"
              value={subject}
              autoCapitalize="none"
              onChangeText={setSubject}
            />
            <InputField
              text={'Message'}
              placeholderTextColor={theme.grayColor}
              placeholder="Enter Reason"
              value={message}
              multiline={true}
              style={styles.message}
              autoCapitalize="none"
              onChangeText={setMessage}
            />
          </View>

          <View style={styles.button}>
            <GradientButton
              onPress={() => setIsVisible(true)}
              style={styles.submitButtonStyle}
              title="Delete Account"
            />
          </View>
        </KeyboardAwareScrollView>
        {/* </View> */}
      </View>
    </MainContainer>
  );
};

export default RequestDeleteScreen;

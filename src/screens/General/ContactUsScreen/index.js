import React, {useState, useRef} from 'react';
import {View, Image, TouchableOpacity, TextInput, Platform} from 'react-native';
import {generalImages, icons, authIcons} from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import styles from './styles';
import theme from '../../../utils/theme';

import {useContactUsHook} from '../../../hooks/useContactUsHook';
import {contactIcons} from '../../../assets/images/index';
import {DrawerActions} from '@react-navigation/native';
import {vh} from '../../../units';
import {useSelector} from 'react-redux';

const ContactUsScreen = props => {
  const emailRef = useRef();
  const subjectRef = useRef();
  const msgRef = useRef();

  const user = useSelector(state => state.authReducer?.customer);
  console.log('USer from COntact US ==================>', user);

  const [contactUsState, contactUsFunc] = useContactUsHook();
  const [email, setEmail] = useState(user?.email ? user?.email : null);
  const [fullName, setFullName] = useState(
    user?.first_name && user?.last_name
      ? user?.first_name + ' ' + user?.last_name
      : 'Guest User',
  );
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState('');

  const handleContactUs = () => {
    const data = {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    };
    contactUsFunc(data);
    setMessage('');
    setSubject();
    setFullName();
    setEmail('');
  };

  console.log(contactUsState?.status, 'contactUsState');

  const [checked, setChecked] = useState(false);
  const [focus, setFocus] = useState(false);
  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image source={generalImages.DrawerLogo} style={styles.logoStyle} />
      </View>
    );
  };

  const renderFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          <View style={styles.contactUsScreenIconView}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
              style={styles.leftArrowIconButton}>
              <Image
                source={icons.leftArrow}
                style={styles.leftArrowIconStyle}
              />
            </TouchableOpacity>
            <TextWrapper style={styles.welcomeBackTextStyle}>
              Contact Us
            </TextWrapper>
          </View>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={fullName}
              onChangeText={text => {
                if (text) setFullName(text);
              }}
              placeHolder="Enter Full Name"
              icon={contactIcons.name}
              fullName
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
            />
            <AuthTextInput
              reference={emailRef}
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Email Address"
              icon={authIcons.email}
              returnKeyType="next"
              onSubmitEditing={() => {
                subjectRef.current.focus();
              }}
            />
            <AuthTextInput
              reference={subjectRef}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeHolder="Enter Subject Here"
              subject
              returnKeyType="next"
              icon={icons.message}
              onSubmitEditing={() => {
                msgRef.current.focus();
              }}
            />

            <View
              style={[
                styles.messageView,
                {
                  borderColor: focus
                    ? theme.defaultForgotPasswordColor
                    : theme.defaultInactiveBorderColor,
                },
              ]}>
              <View style={styles.emailIconView}>
                <Image
                  source={authIcons.message}
                  style={[
                    styles.emailStyle,
                    {
                      tintColor: focus
                        ? theme.defaultForgotPasswordColor
                        : theme.defaultInactiveBorderColor,
                    },
                  ]}
                />
              </View>
              <View
                style={{
                  marginTop: Platform.OS === 'android' ? 0.01 * vh : 2.8 * vh,
                }}>
                <TextInput
                  ref={msgRef}
                  onFocus={() => setFocus(true)}
                  value={message}
                  onChangeText={text => setMessage(text)}
                  placeholder="Enter Your Message"
                  placeholderTextColor={theme.defaultInactiveBorderColor}
                  multiline={true}
                  style={styles.textInputStyle}
                  onSubmitEditing={() => {
                    handleContactUs();
                  }}
                />
              </View>
            </View>
          </View>

          <SubmitButton
            onPress={handleContactUs}
            style={styles.submitButtonStyle}
            titleTextStyle={styles.titleTextStyle}
            title="Submit"
          />
        </View>
      </View>
    );
  };

  return (
    <MainContainer>
      <ScrollWrapper
        bounces={Platform.OS === 'android' ? true : false}
        avoidKeyboard={true}
        style={styles.scroll}
        contentContainerStyle={styles.content}>
        {renderLogo()}
        {renderFields()}
      </ScrollWrapper>
    </MainContainer>
  );
};
export default ContactUsScreen;

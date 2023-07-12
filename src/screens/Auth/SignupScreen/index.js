import React, {useState, useCallback, useRef} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  authIcons,
  contactIcons,
  generalImages,
  icons,
} from '../../../assets/images/index';
import MainContainer from '../../../components/Containers/MainContainer';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper'; //might need it
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import SocialButton from '../../../components/Buttons/SocialButton';
import ButtonTouchableTextButton from '../../../components/Buttons/BottomTouchableTextButton';
import {useRegisterHook} from '../../../hooks/useRegisterHook';
import {useLoginHook} from '../../../hooks/useLoginHook';
import styles from './styles';
import {useFocusEffect} from '@react-navigation/core';
import theme from '../../../utils/theme';

const SignupScreen = props => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [signupState, signupFunc] = useRegisterHook();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  // const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState(false);
  const [username, setUsername] = useState();

  const handleSignUp = () => {
    const data = {
      email: email,
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password,
      confirmPassword: confirmPassword,
    };
    signupFunc(data);
  };

  console.log(
    'signupState =========================>',
    signupState,
    '<================================================',
  );
  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image source={generalImages.logo} style={styles.logoStyle} />
      </View>
    );
  };

  const renderSignUpFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          {renderTabs()}
          <TextWrapper style={styles.welcomeBackTextStyle}>
            Create Account
          </TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={username}
              onChangeText={text => setUsername(text)}
              fullName
              placeHolder="Enter Username"
              icon={contactIcons.name}
            />
            <AuthTextInput
              value={firstName}
              onChangeText={text => setFirstName(text)}
              fullName
              placeHolder="Enter First name"
              icon={contactIcons.subject}
            />
            <AuthTextInput
              value={lastName}
              onChangeText={text => setLastName(text)}
              fullName
              placeHolder="Enter Last name"
              icon={contactIcons.subject}
            />
            <AuthTextInput
              reference={emailRef}
              value={email}
              icon={authIcons.email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Email Address"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <AuthTextInput
              reference={passwordRef}
              value={password}
              onChangeText={text => setPassword(text)}
              placeHolder="Enter Password"
              type="password"
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />
            <AuthTextInput
              reference={confirmPasswordRef}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              placeHolder="Confirm Password"
              type="password"
              onSubmitEditing={() => {
                handleSignUp();
              }}
            />
          </View>

          <SubmitButton
            // onPress={() => props.navigation.navigate('TabNavigator')}
            onPress={() => handleSignUp()}
            style={styles.submitButtonStyle}
            titleTextStyle={styles.titleTextStyle}
            title="Sign up"
          />
        </View>

        {renderSocialButtons()}
      </View>
    );
  };

  const renderSocialButtons = () => {
    return (
      <View style={styles.socialButtonsView}>
        {/* <SocialButton /> */}
        <ButtonTouchableTextButton
          onPress={() => props.navigation.navigate('SignInScreen')}
          type="account"
          title="Log in Here"
          value={'Already Have An Account ?'}
        />
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View style={styles.tabsView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignInScreen')}
          style={styles.signupTabView}>
          <TextWrapper
            style={[styles.signinTabTextStyle, {textDecorationLine: 'none'}]}>
            Sign In
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignupScreen')}
          style={styles.signupTabView}>
          <TextWrapper
            style={[
              styles.signupTextStyle,
              {color: theme.activeTextInputColor},
              {textDecorationLine: 'underline'},
            ]}>
            Sign Up
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <LinearGradient
      start={{x: 0.5, y: 0.5}}
      end={{x: 1, y: 0}}
      colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
      style={{flex: 1}}>
      <ScrollWrapper avoidKeyboard={true}>
        {renderLogo()}
        {renderSignUpFields()}
      </ScrollWrapper>
    </LinearGradient>
  );
};
export default SignupScreen;

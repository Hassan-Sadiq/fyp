import React, {useState, useCallback} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {authIcons, generalImages, icons} from '../../../assets/images/index';
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
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import theme from '../../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';
import {useRef} from 'react';
import {vh} from '../../../units';
import {useDispatch, useSelector} from 'react-redux';
import {storeCredentials} from '../../../redux/actions/authActions';

const SignInScreen = props => {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.authReducer);
  const navigation = useNavigation();
  const passRef = useRef();
  const [email, setEmail] = useState(
    authUser?.userEmail ? authUser?.userEmail : '',
  );
  const [loginPassword, setLoginPassword] = useState(
    authUser?.password ? authUser?.password : '',
  );
  const [loginState, loginFunc] = useLoginHook();
  const [checked, setChecked] = useState(
    authUser?.customer?.user?.email ? true : false,
  );
  const handleLogin = () => {
    const data = {
      email: email,
      password: loginPassword,
    };
    if (checked) {
      console.log("xoxo");
      dispatch(storeCredentials(data));
    }
    loginFunc(data);
  };

  const renderLogo = () => {
    return (
      <View style={styles.logoView}>
        <Image source={generalImages.logo} style={styles.logoStyle} />
      </View>
    );
  };

  const handleForgotPasswordNav = () => {
    props.navigation.navigate('ForgotPasswordScreen');
  };

  const renderCheckWithForgotPassword = () => {
    return (
      <View style={styles.mainRow}>
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={styles.checkButtonView}>
          {checked ? (
            <Image source={icons.check} style={[styles.checkIconStyle]} />
          ) : (
            <Image source={icons.unchecked} style={styles.checkIconStyle} />
          )}
        </TouchableOpacity>

        <TextWrapper style={styles.rememberTextStyle}>Remember me</TextWrapper>

        <TouchableOpacity
          onPress={handleForgotPasswordNav}
          style={styles.forgotPasswordButtonView}>
          <TextWrapper style={styles.forgotPasswordTextStyle}>
            Forget Password
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  const renderGuestCheckIn = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          marginVertical: vh * 1,
        }}>
        <TextWrapper style={styles.guestTextStyle}>
          Continue as a Guest
        </TextWrapper>
      </TouchableOpacity>
    );
  };

  const renderSocialLogin = () => {
    return (
      <View style={styles.renderSocialLoginStyle}>
        <View>
          <TextWrapper
            style={[
              styles.socialTextStyle,
              {
                color: theme.black,
              },
            ]}>
            Don't Have An Account?
          </TextWrapper>
        </View>

        <TouchableOpacity
          style={styles.signupViewStyle}
          onPress={() => props.navigation.navigate('SignupScreen')}>
          <TextWrapper
            style={[
              styles.socialTextStyle,
              {
                color: theme.defaultBackgroundColor,
              },
            ]}>
            Sign Up Here
          </TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };
  const renderLoginFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>
          {renderTabs()}
          <TextWrapper style={styles.welcomeBackTextStyle}>
            Welcome Back
          </TextWrapper>
          <View style={styles.fieldsView}>
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Your Email Address"
              keyboardType="email-address"
              icon={authIcons.email}
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => passRef.current.focus()}
            />
            <AuthTextInput
              reference={passRef}
              value={loginPassword}
              onChangeText={text => setLoginPassword(text)}
              placeHolder="Enter Your Password"
              type="password"
              onSubmitEditing={() => handleLogin()}
            />
          </View>

          {renderCheckWithForgotPassword()}
          <SubmitButton
            onPress={handleLogin}
            style={styles.submitButtonStyle}
            titleTextStyle={styles.titleTextStyle}
            title="Log Into Your Account"
          />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          {renderSocialLogin()}
          {renderGuestCheckIn()}
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View style={styles.tabsView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignInScreen')}
          style={styles.signinTabView}>
          <TextWrapper
            style={[
              styles.signinTabTextStyle,
              {color: theme.activeTextInputColor},
              {textDecorationLine: 'underline'},
            ]}>
            Sign In
          </TextWrapper>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignupScreen')}
          style={styles.signupTabView}>
          <TextWrapper style={[styles.signupTextStyle]}>Sign Up</TextWrapper>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <LinearGradient
      start={{x: 0.5, y: 0.5}}
      end={{x: 1, y: 0}}
      colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
      // colors={['#D6D6D6', '#FFFFFF', '#D6D6D6']}
      style={{flex: 1}}>
      <ScrollWrapper avoidKeyboard={true}>
        {renderLogo()}
        {renderLoginFields()}
      </ScrollWrapper>
    </LinearGradient>
  );
};
export default SignInScreen;

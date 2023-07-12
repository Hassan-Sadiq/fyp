import React, {useState, useEffect, useCallback} from 'react';
import {userSignUp} from '../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {regex, validateEmail} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';

export const useRegisterHook = () => {
  const dispatch = useDispatch();
  const [signupState, setSignupState] = useState(false);
  const navigation = useNavigation();
  const signupFunc = useCallback((data, callback) => {
    console.log('Data from SignUP hook ========>', data);
    try {
      if (
        data?.email == '' ||
        data?.username == '' ||
        data?.first_name == '' ||
        data?.last_name == '' ||
        data?.password == ''
      ) {
        showToast('Fields are empty');
      } else if (!regex.onlyAlphabets.test(data?.first_name)) {
        showToast('First name cannot contain numbers');
      } else if (!regex.onlyAlphabets.test(data?.last_name)) {
        showToast('Last name cannot contain numbers');
      } else if (validateEmail(data.email) != true) {
        showToast('Please enter a valid email');
      } else if (data.password.length < 8) {
        showToast('Password should be of atleast 8 characters');
      } else if (data?.password === data?.confirmPassword) {
        dispatch(
          userSignUp({
            username: data?.username,
            email: data?.email,
            first_name: data?.first_name,
            last_name: data?.last_name,
            password: data?.password,
            confirm_password: data?.confirmPassword,
          }),
        ).then(response => {
          if (response) {
            navigation.navigate('SignInScreen');
          }
        });
      } else {
        showToast('Passwords are not matched');
      }
    } catch (error) {
      showToast(error);
    }
  }, []);

  return [signupState, signupFunc];
};

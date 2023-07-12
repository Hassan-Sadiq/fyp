import { useState, useCallback } from 'react';
import { userLogin } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';
import { forgotPasswordEmail } from '../../redux/actions/authActions';
import { validateEmail } from '../../utils/validation';



export const useForgotPasswordHook = () => {
  const dispatch = useDispatch();
  const [forgotPasswordEmailState, setForgotPasswordEmailState] = useState();

  const forgotPasswordEmailFunc = useCallback(data => {
    try {
      if (data == '') {
        showToast('Please Enter Email Address');
        return
      }
      if (validateEmail(data) != true) {
        showToast('Please enter a valid email')
        return
      }

      dispatch(forgotPasswordEmail(data)).then(res => {
        setForgotPasswordEmailState(res);
      });
    } catch (error) {
      showToast(error)
    }
  }, []);
  return [forgotPasswordEmailState, forgotPasswordEmailFunc];
};
import { useState, useCallback } from 'react';
import { userLogin, userSignUp } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { useNavigation } from '@react-navigation/native';
import {validateEmail} from '../../utils/validation';
export const useLoginHook = () => {
  const navgiation = useNavigation();
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(null);

  const loginFunc = useCallback(data => {
    console.log("Data ====>", data);
    if (data?.email == '' || data?.loginPassword == '') {
      showToast('Please fill all fields');
    } else if (validateEmail(data?.email) != true) {
      showToast('Please enter a valid email');
    } else {
      try {
        dispatch(userLogin(data)).then(res => {
          setLoginState(res);
        });
      } catch (e) {
        showToast(e);
      }
    }
  }, []);
  return [loginState, loginFunc];
};

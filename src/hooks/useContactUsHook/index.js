import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {contactUsAction} from '../../redux/actions/contactUsActions';
import {validateAlphabetsOnly, validateEmail} from '../../utils/validation';
import {useNavigation} from '@react-navigation/native';

export const useContactUsHook = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [contactUsState, setContactUsState] = useState(null);

  const contactUsFunc = useCallback(data => {
    if (data?.fullName === '' || data?.email === '' || data?.message === '') {
      showToast('Please fill all fields');
    } else if (validateAlphabetsOnly(data?.fullName) != true) {
      showToast('Name can only contain Alphabets');
    } else if (validateEmail(data?.email) != true) {
      showToast('Please enter a valid email');
    } else {
      try {
        dispatch(contactUsAction(data)).then(res => {
          setContactUsState(res);
          if (res) {
            navigation.goBack();
          }
        });
      } catch (e) {
        showToast(c);
      }
    }
  }, []);
  return [contactUsState, contactUsFunc];
};

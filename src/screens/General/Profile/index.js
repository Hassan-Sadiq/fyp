import React, {useState} from 'react';
import {View, RefreshControl, Image} from 'react-native';
import styles from './styles';
// import GradientButton from '../../../components/Buttons/GradientButton';
import TextWrapper from '../../../components/TextWrapper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {useFetchProfileHook} from '../../../hooks/useFetchProfileHook';
import {vh, vw} from '../../../units';
import {getProfileDetails} from '../../../redux/actions/profileActions';
import {showToast} from '../../../redux/Api/HelperFunction';
import theme from '../../../utils/theme';
import SearchHeader from '../../../components/Headers/SearchHeader';
import {deleteUser} from '../../../redux/actions/authActions';
import SubmitButton from '../../../components/Buttons/SubmitButton';

const Profile = props => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector(state => state.authReducer?.customer);
  console.log('user ====>', user?.lastname);
  const [, profileFunc] = useFetchProfileHook();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const onRefresh = () => {
    if (!refreshing) {
      setRefreshing(true);
      try {
        dispatch(getProfileDetails(user?.id, setRefreshing))
          .then(res => {
            setRefreshing(false);
          })
          .catch(err => {
            setRefreshing(false);
            showToast(error);
          });
      } catch (error) {
        setRefreshing(false);
        showToast(error);
      }
    }
  };

  const handleDeleteUser = () => {
    try {
      dispatch(deleteUser(user?.user?.userDetails?.id));
    } catch (error) {
      showToast(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <SearchHeader
        tintColor={theme.defaultBackgroundColor}
        title="My Profile"
        type="drawer"
        searchIconDisabled
      /> */}

      <View style={styles.subContainer}>
        <View style={{flex: 1}}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                titleColor={theme.defaultForgotPasswordColor}
                colors={[theme.defaultForgotPasswordColor]}
              />
            }
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.contentContainer}>
              <View style={styles.inputView}>
                <View style={styles.inputRow}>
                  <View style={[styles.inputBox, {flex: 1, marginTop: vh * 2}]}>
                    <TextWrapper style={styles.inputText}>
                      {'First Name'}
                    </TextWrapper>
                    <TextWrapper
                      style={[styles.textInput, {marginRight: vw * 5}]}>
                      {user?.first_name ? user?.first_name : ''}
                    </TextWrapper>
                  </View>
                  <View style={[styles.inputBox, {flex: 1, marginTop: vh * 2}]}>
                    <TextWrapper style={styles.inputText}>
                      {'Last Name'}
                    </TextWrapper>
                    <TextWrapper style={[styles.textInput]}>
                      {user?.last_name ? user?.last_name : ''}
                    </TextWrapper>
                  </View>
                </View>
                <View style={[styles.inputBox]}>
                  <TextWrapper style={styles.inputText}>{'Email'}</TextWrapper>
                  <TextWrapper style={[styles.textInput]}>
                    {user?.email ? user?.email : ''}
                  </TextWrapper>
                </View>
              </View>
              <View style={styles.button}>
                {/* <GradientButton
                  style={styles.btn}
                  textStyle={styles.btnText}
                  text={'Edit Profile'}
                  onPress={() => props.navigation.navigate('EditProfileScreen')}
                />
                <GradientButton
                  style={[styles.deleteBtn, {width: '80%'}]}
                  textStyle={styles.btnText}
                  text={'Request Delete Account'}
                  colors={[theme.red, theme.red]}
                  onPress={() =>
                    props.navigation.navigate('RequestDeleteScreen')
                  }
                /> */}
                <SubmitButton
                  onPress={() => props.navigation.navigate('EditProfile')}
                  title="Edit Profile"
                  style={styles.deleteBtn}
                />
                <SubmitButton
                  onPress={() =>
                    props.navigation.navigate('RequestDeleteScreen')
                  }
                  title="Request Delete Account"
                  style={styles.deleteBtn}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default Profile;

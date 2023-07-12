import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import ScrollWrapper from '../../../components/Containers/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import SearchHeader from '../../../components/Headers/SearchHeader';
import {WebView} from 'react-native-webview';

import styles from './styles';
import {vh, vw} from '../../../units';
import MainContainer from '../../../components/Containers/MainContainer';
import {useDispatch} from 'react-redux';
import {privacyPolicyAction} from '../../../redux/actions/authActions';
import RenderHTML from 'react-native-render-html';
import theme from '../../../utils/theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {icons} from '../../../assets/images';

const TermsConditionScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [policy, setPolicy] = useState('');

  useEffect(() => {
    dispatch(privacyPolicyAction()).then(response => {
      setPolicy(response?.description);
    });
  });
  const renderOrderAcceptedView = () => {
    return (
      <View style={styles.mainView}>
        <View style={styles.contentViewStyle}>
          <RenderHTML
            baseStyle={{
              width: 90 * vw,
              color: theme.black,
            }}
            contentWidth={100 * vw}
            source={{html: policy}}
          />
        </View>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.mainHeaderView}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={styles.rightArrowIconView}>
            <Image
              source={icons.lightDrawer}
              style={styles.leftArrowIconStyle}
            />
          </TouchableOpacity>

          <TextWrapper style={styles.textStyle}>Privacy Policy</TextWrapper>
        </View>
      </View>
    );
  };
  return (
    <>
      {renderHeader()}
      <ScrollWrapper
        style={styles.scroll}
        contentContainerStyle={styles.content}>
        {renderOrderAcceptedView()}
      </ScrollWrapper>
    </>
  );
};
export default TermsConditionScreen;

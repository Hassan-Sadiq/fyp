import React, {useEffect, useState} from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';

import TextWrapper from '../../../components/TextWrapper';
import {WebView} from 'react-native-webview';

import styles from './styles';
import {vh, vw} from '../../../units';
import MainContainer from '../../../components/Containers/MainContainer';
import {termsConditionAction} from '../../../redux/actions/authActions';
import {useDispatch} from 'react-redux';
import RenderHTML from 'react-native-render-html';
import theme from '../../../utils/theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {icons} from '../../../assets/images';

const TermsConditionScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [terms, setTerms] = useState('');

  useEffect(() => {
    dispatch(termsConditionAction()).then(response => {
      setTerms(response?.description);
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
            source={{html: terms}}
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

          <TextWrapper style={styles.textStyle}>Terms & Conditions</TextWrapper>
        </View>
      </View>
    );
  };
  return (
    <>
      {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}>
        {renderOrderAcceptedView()}
      </ScrollView>
    </>
  );
};
export default TermsConditionScreen;

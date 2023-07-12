import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';

import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';

import SearchHeaderWithBackground from '../../../components/Headers/SearchHeaderWithBackground';
import MainContainer from '../../../components/Containers/MainContainer';

import {useAboutUsHook} from '../../../hooks/useAboutUsHook';
import RenderHTML from 'react-native-render-html';
import {vh, vw} from '../../../units';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/Containers/ScrollWrapper';

const AboutUsScreen = props => {
  const [aboutUsState, aboutUsFunc] = useAboutUsHook();
  useEffect(() => {
    aboutUsFunc();
  }, []);

  console.log(aboutUsState, 'aboutUsFunc');
  const renderContent = () => {
    return (
      <View style={styles.contentView}>
        <View style={styles.contentViewStyle}>
          <TextWrapper
            style={styles.descriptionContentView}
            numberOfLines={300}>
            {/* {aboutUsState} */}

            <RenderHTML
              baseStyle={{
                width: 90 * vw,
                color: theme.black,
              }}
              contentWidth={100 * vw}
              source={{html: aboutUsState}}
            />
          </TextWrapper>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollWrapper
        style={styles.scroll}
        contentContainerStyle={styles.content}>
        <SearchHeaderWithBackground type="drawer" value="Aboutus" />
        {renderContent()}
      </ScrollWrapper>
    </>
  );
};
export default AboutUsScreen;

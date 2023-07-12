import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {generalImages, icons} from '../../../assets/images/index';
import TextWrapper from '../../../components/TextWrapper';

import styles from './styles';
import {vh, vw} from '../../../units';

const WelcomeScreen = props => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={generalImages.splashbg}
      imageStyle={{resizeMode: 'stretch'}}>
      <View style={styles.appiconContainerView}>
        <Image source={generalImages.AppLogo} />
      </View>
      <View style={styles.iconContainerView}>
        <Image source={generalImages.NewCollectionIcon} />
      </View>
      <TouchableOpacity
        style={styles.submitAlternateButtonView}
        onPress={() => props.navigation.navigate('GuestStack')}>
        <TextWrapper style={styles.getStartedStyles}>
          Continue As Guest
        </TextWrapper>
        <Image
          source={icons.getStartedIcon}
          style={{
            height: vh * 7,
            width: vw * 8,
            resizeMode: 'contain',
            marginTop: Platform.OS == 'ios' ? vh * 0 : vh * -1,
            marginLeft: Platform.OS == 'ios' ? vw * 4.5 : vw * 2,
          }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default WelcomeScreen;

import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {vh, vw} from '../../../units/index';
import TextWrapper from '../../TextWrapper';
import {Fonts} from '../../../assets/fonts';
import SubmitButton from '../../Buttons/SubmitButton';
import theme from '../../../utils/theme';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';

const HomeSlider = props => {
  const [Loader, isLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      Platform.OS == 'android' && isLoading(true);
      console.log('Inside UseFocusEffect');
    }, []),
  );

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {props?.data?.video ? (
        <View style={styles.ViewContainerStyle}>
          <LinearGradient
            colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
            style={styles.linearGradient}>
            <Video
              source={{uri: props?.data?.video}}
              style={styles.VideoStyle}
              repeat={true}
              resizeMode="cover"
              onBuffer={a => console.log('a onload =====>', a)}
              onLoad={a => isLoading(false)}
            />
            {Loader && (
              <ActivityIndicator
                size="large"
                color={theme.defaultBackgroundColor}
                style={{position: 'absolute', top: vh * 10, right: vw * 40}}
              />
            )}
          </LinearGradient>
        </View>
      ) : (
        <ImageBackground
          imageStyle={{borderRadius: 4 * vw}}
          source={{uri: props?.data?.image}}
          style={styles.imageBackgroundStyle}>
          <LinearGradient
            colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.8)']}
            style={styles.linearGradient}>
            <View style={styles.sliderDescriptionView}>
              <View style={styles.sliderTextView}>
                {/* <TextWrapper style={styles.sliderTextStyle}>{props?.data?.description}</TextWrapper> */}

                <TextWrapper
                  numberOfLines={3}
                  style={styles.sliderMainTextHeading}>
                  {props?.data?.text}
                </TextWrapper>

                {/* <SubmitButton
                  textStyle={styles.textStyleSubmitButton}
                  title="Shop Now"
                  style={[styles.submitButtonView]}
                  onPress={props.onPress}
                /> */}
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  imageBackgroundStyle: {
    height: 25 * vh,
    width: 90 * vw,
    resizeMode: 'contain',
    marginTop: 2 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh * 4,
  },
  VideoStyle: {
    height: 25 * vh,
    width: 90 * vw,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh * 4,
    borderRadius: vh * 3,
  },
  ViewContainerStyle: {
    height: 25 * vh,
    width: 90 * vw,
    resizeMode: 'contain',
    marginTop: 2 * vh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh * 4,
  },

  sliderDescriptionView: {
    flexDirection: 'row',
    width: 80 * vw,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 1,
    marginBottom: 3 * vh,
    justifyContent: 'space-between',
  },

  rightArrowIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  sliderTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  touchableArrowButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderTextStyle: {
    width: 70 * vw,
    fontSize: 2 * vh,
    color: '#fff',
    lineHeight: 3 * vh,
    fontFamily: Fonts.SFR,
    fontSize: 2.8 * vh,
  },

  sliderMainTextHeading: {
    width: 70 * vw,
    color: '#fff',
    lineHeight: 3 * vh,
    fontFamily: Fonts.MSW,
    fontSize: 2.8 * vh,
    paddingTop: vh * 2,
  },

  collectionTextStyle: {
    width: 70 * vw,
    fontSize: 2 * vh,
    color: '#fff',
    lineHeight: 3 * vh,
    fontFamily: Fonts.SFD,
    fontSize: 1.8 * vh,
  },

  submitButtonView: {
    width: 28 * vw,
    height: 5 * vh,
    marginRight: 42 * vw,
    backgroundColor: theme.whiteBackground,
    borderRadius: 4 * vw,
    marginTop: 1 * vh,
  },

  textStyleSubmitButton: {
    color: theme.activeTextInputColor,
    fontSize: 1.8 * vh,
  },

  linearGradient: {
    height: 25 * vh,
    width: 90 * vw,
    borderRadius: vh * 3,
  },
});
export default HomeSlider;

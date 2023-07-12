import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import {icons, sideIcons} from '../../../assets/images';
import {vw, vh} from '../../../units';
import TextWrapper from '../../TextWrapper';

import styles from './styles';

const drawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: sideIcons.home,
  },
  ProfileStack: {
    label: 'My Profile',
    icon: icons.profileIcon,
  },
  AboutScreen: {
    label: 'About Us',
    icon: sideIcons.aboutus,
  },

  WishlistScreen: {
    label: 'Wishlist',
    icon: sideIcons.heart,
  },
  OrderStack: {
    label: 'My Order',
    icon: icons.orderIcon,
  },
  ContactUsScreen: {
    label: 'Contact Us',
    icon: sideIcons.phone,
  },
  PrivacyPolicyScreen: {
    label: 'Privacy Policy',
    icon: sideIcons.privacy,
  },
  TermsConditionScreen: {
    label: 'Terms & Conditions',
    icon: sideIcons.terms,
  },
};

const GuestdrawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: sideIcons.home,
  },
  AboutScreen: {
    label: 'About Us',
    icon: sideIcons.aboutus,
  },

  WishlistScreen: {
    label: 'Wishlist',
    icon: sideIcons.heart,
  },
  
  ContactUsScreen: {
    label: 'Contact Us',
    icon: sideIcons.phone,
  },
  PrivacyPolicyScreen: {
    label: 'Privacy Policy',
    icon: sideIcons.privacy,
  },
  TermsConditionScreen: {
    label: 'Terms & Conditions',
    icon: sideIcons.terms,
  },
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  const loggedIn = useSelector(state => state.authReducer.loggedin);

  const routeConfigs =  drawerRoutes[props?.routeName] 
  const GuestRouteConfigs = GuestdrawerRoutes[props?.routeName] 
  
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <Image style={styles.icon} source={loggedIn ? routeConfigs?.icon :  GuestRouteConfigs?.icon} /> 
       <TextWrapper style={styles.label}>{loggedIn ? routeConfigs?.label : GuestRouteConfigs?.label}</TextWrapper>
    </TouchableOpacity>
  );
};

export default DrawerButton;

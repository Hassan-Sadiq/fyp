import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import TabNavigator from '../../Navigation/TabNavigator';
import DrawerScreenWrapper from '../../components/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import GeneralStack from '../GeneralStack';
import AboutUsScreen from '../../screens/General/AboutUsScreen';
import ContactUsScreen from '../../screens/General/ContactUsScreen';
import PrivacyPolicyScreen from '../../screens/General/PrivacyPolicyScreen';
import TermsConditionScreen from '../../screens/General/TermsConditionScreen';
import HomeScreen from '../../screens/General/HomeScreen';
import OtherStack from '../OtherStack';
import ProfileStack from '../../navigation/ProfileStack';
import {vh, vw} from '../../units';
import {useSelector} from 'react-redux';
import OrderStack from '../OrderStack';
import theme from '../../utils/theme';
import {Platform} from 'react-native';

const Drawer = createDrawerNavigator();

const AnimatedHomeStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <GeneralStack />
    </DrawerScreenWrapper>
  );
};

const DrawerNavigator = props => {
  const user = useSelector(state => state.authReducer);

  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',

        drawerStyle: {
          width: 70 * vw,
          backgroundColor:
            Platform.OS === 'android' ? 'transparent' : 'transparent',
        },
        sceneContainerStyle: {backgroundColor: theme.defaultTextColor},
        drawerType: 'slide',
        swipeEnabled: true,
      }}>
      <Drawer.Screen name="HomeStack" component={AnimatedHomeStack} />
      <Drawer.Screen name="AboutScreen" component={AboutUsScreen} />
      <Drawer.Screen name="WishlistScreen" component={OtherStack} />
      <Drawer.Screen name="OrderStack" component={OrderStack} />
      <Drawer.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Drawer.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Drawer.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

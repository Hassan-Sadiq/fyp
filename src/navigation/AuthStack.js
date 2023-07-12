import * as React from 'react';
import {Easing} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import GuestStack from '../navigation/GuestStack';

import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="WelcomeScreen"
        component={WelcomeScreen}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="GuestStack"
        component={GuestStack}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignInScreen"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignupScreen"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

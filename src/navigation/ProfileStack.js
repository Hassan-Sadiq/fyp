import * as React from 'react';
import {Easing} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/General/Profile';
import EditProfile from '../screens/General/EditProfile';
import RequestDeleteScreen from '../screens/General/RequestDeleteScreen';
import navigationOptions from './NavigationOptions';
function CatgoriesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        options={{headerShown: false}}
        name="RequestDeleteScreen"
        component={RequestDeleteScreen}
      />
    </Stack.Navigator>
  );
}

export default CatgoriesStack;

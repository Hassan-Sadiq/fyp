import * as React from 'react';
import {Easing} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/General/HomeScreen';
import SearchScreen from '../screens/General/SearchScreen';
import ProductDetailsScreen from '../screens/General/ProductDetailsScreen';
import FilterScreen from '../screens/General/FilterScreen';
import TypeSearchScreen from '../screens/General/TypeSearchScreen';
import BasketScreen from '../screens/General/BasketScreen';
import CartStack from './CartStack';
import ProductsScreen from '../screens/General/ProductsScreen';
import CategoryScreen from '../screens/General/CategoryScreen';
import CatgoriesStack from './CatgoriesStack';
import EntertainmentScreen from '../screens/General/EntertainmentScreen';
import navigationOptions from './NavigationOptions';

function GeneralStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={navigationOptions}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />

      <Stack.Screen name="SearchScreen" component={SearchScreen} />

      <Stack.Screen name="TypeSearchScreen" component={TypeSearchScreen} />

      <Stack.Screen
        options={{headerShown: false}}
        name="BasketScreen"
        component={BasketScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="CartStack"
        component={CartStack}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="CatgoriesStack"
        component={CatgoriesStack}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="EntertainmentScreen"
        component={EntertainmentScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="ProductsScreen"
        component={ProductsScreen}
      />

      <Stack.Screen
        // options={{headerShown: false}}
        name="FilterScreen"
        component={FilterScreen}
      />
    </Stack.Navigator>
  );
}

export default GeneralStack;

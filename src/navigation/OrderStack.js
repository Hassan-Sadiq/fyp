import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ViewOrderScreen from '../screens/General/ViewOrderScreen';
import OrderDetailsScreen from '../screens/General/OrderDetailsScreen';
import navigationOptions from './NavigationOptions';

function OrderStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="ViewOrderScreen" component={ViewOrderScreen} />
      <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
}

export default OrderStack;

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ViewOrderScreen from '../screens/General/ViewOrderScreen';
import OrderDetailsScreen from '../screens/General/OrderDetailsScreen';

function GuestOtherStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ViewOrderScreen"
        component={ViewOrderScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default GuestOtherStack;

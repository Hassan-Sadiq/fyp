import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './MainNavigator';
import { useSelector } from 'react-redux';

function Navigation() {
  const authUser = useSelector(state => state.authReducer);
  console.log('authUser', authUser?.userEmail);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;

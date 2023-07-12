import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StatusBar, StyleSheet, UIManager, View} from 'react-native';
import Navigator from './src/navigation/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/src/integration/react';
import {store, persistor} from './src/redux/store';
import Loader from './src/components/Loader';
import theme from './src/utils/theme';
import {StripeProvider} from '@stripe/stripe-react-native';
import AnimatedSplash from 'react-native-animated-splash';

const App = props => {
  React.useEffect(() => {
    AnimatedSplash.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            // barStyle="light-content"
            backgroundColor={'transparent'}
            translucent={true}
          />
          <Loader />
          <StripeProvider
            publishableKey="pk_live_51KJ1BxEk8GOFOEFB2DXPlYFSLrxMs2M5COlVuBD9yBshKn3GpM1uA7rU7GXZPFQDBj9sMAIysAvcYXgIxTgWVggQ00hCGMkpmR"
            // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
            // merchantIdentifier="merchant.DaddyAndSug" // required for Apple Pay
          >
            <Navigator />
          </StripeProvider>
        </View>
      </PersistGate>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;

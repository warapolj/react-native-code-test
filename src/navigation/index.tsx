import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const {Screen, Navigator} = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
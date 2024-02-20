import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CouponScreen from '../screens/CouponScreen';

const {Screen, Navigator} = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CouponScreen" component={CouponScreen} />
    </Navigator>
  );
};

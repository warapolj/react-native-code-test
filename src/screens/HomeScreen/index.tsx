import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProps} from '../../navigation/interfaces';

function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go To My Coupon"
        onPress={() => {
          navigation.navigate('CouponScreen');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;

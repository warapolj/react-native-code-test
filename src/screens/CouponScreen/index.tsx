import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CouponList from './CouponList';

function CouponScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <CouponList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FB',
  },
});

export default CouponScreen;

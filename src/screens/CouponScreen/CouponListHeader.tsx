import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Row} from '../../components/Row';
import CouponIcon from '../../../assets/coupon.svg';

export default function CouponListHeader() {
  return (
    <Row style={styles.container}>
      <View style={{marginHorizontal: 8}}>
        <CouponIcon height={25} width={25} fill="#3F78E1" />
      </View>
      <Text style={{color: '#3F78E1'}}>กรอกรหัสส่วนลด หรือรหัสสิทธิต่างๆ</Text>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F9FE',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
});

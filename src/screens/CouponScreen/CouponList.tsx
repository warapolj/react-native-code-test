import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useMyCoupons} from './useMyCoupons';
import {Coupon} from '../../services';
import CouponListItem from './CouponListItem';

export default function CouponList() {
  const {coupons} = useMyCoupons();
  const [selectedCouponId, setSelectedCouponId] = useState('');

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Coupon>) => {
      return (
        <CouponListItem
          item={item}
          isSelected={item.id === selectedCouponId}
          onPress={() => {}}
          onPressUseCoupon={setSelectedCouponId}
          onPressRemoveCoupon={() => setSelectedCouponId('')}
        />
      );
    },
    [selectedCouponId],
  );

  return (
    <FlatList
      data={coupons}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      bounces={false}
      style={{padding: 10}}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    />
  );
}

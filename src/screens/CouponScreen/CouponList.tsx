import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {useMyCoupons} from './useMyCoupons';
import {Coupon} from '../../services';
import CouponListItem from './CouponListItem';
import CouponListHeader from './CouponListHeader';
import CouponModal from './CouponModal';

export default function CouponList() {
  const {coupons} = useMyCoupons();
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon>();
  const [useCouponId, setUseCouponId] = useState('');

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Coupon>) => {
      return (
        <CouponListItem
          item={item}
          isSelected={item.id === useCouponId}
          onPress={() => setSelectedCoupon(item)}
          onPressUseCoupon={setUseCouponId}
          onPressRemoveCoupon={() => setUseCouponId('')}
        />
      );
    },
    [useCouponId],
  );

  return (
    <>
      <FlatList
        data={coupons}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        bounces={false}
        style={{padding: 10}}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        ListHeaderComponent={CouponListHeader}
      />
      <CouponModal
        selectedCoupon={selectedCoupon}
        onClose={() => setSelectedCoupon(undefined)}
      />
    </>
  );
}

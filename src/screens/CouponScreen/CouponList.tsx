import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useMyCoupons} from './useMyCoupons';
import {Coupon} from '../../services';
import CouponListItem from './CouponListItem';

export default function CouponList() {
  const {coupons} = useMyCoupons();
  const [selectedCouponId, setSelectedCouponId] = useState<string>('');

  const renderItem = useCallback(({item}: ListRenderItemInfo<Coupon>) => {
    return <CouponListItem item={item} />;
  }, []);

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

import {useEffect, useState} from 'react';
import {Coupon, getMyCouponsService} from '../../services';

export function useMyCoupons() {
  const [coupons, setCoupons] = useState<Array<Coupon>>([]);

  useEffect(() => {
    const getMyCoupons = async () => {
      const data = getMyCouponsService();
      setCoupons(data);
    };

    getMyCoupons();
  }, []);

  return {coupons};
}

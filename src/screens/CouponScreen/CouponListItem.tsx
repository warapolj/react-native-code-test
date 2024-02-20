import React from 'react';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import LocaltionPinIcon from '../../../assets/location-pin.svg';
import StarIcon from '../../../assets/star.svg';
import {Row} from '../../components/Row';
import {formatDate} from '../../utils';
import Button from '../../components/Button';
import Link from '../../components/Link';
import {Coupon} from '../../services';

interface IProps {
  item: Coupon;
  isSelected: boolean;
  onPressUseCoupon: (couponId: string) => void;
  onPress: (couponId: string) => void;
  onPressRemoveCoupon: () => void;
}

export default function CouponListItem({
  item,
  isSelected,
  onPressUseCoupon,
  onPress,
  onPressRemoveCoupon,
}: IProps) {
  const handleUseCoupon = () => {
    if (isSelected) {
      onPressRemoveCoupon();
    } else {
      onPressUseCoupon(item.id);
    }
  };

  return (
    <Pressable style={[styles.container]} onPress={() => onPress(item.id)}>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        {(item.shopName || item.reviewRate) && (
          <Row style={{alignItems: 'center'}}>
            {item.shopName && (
              <Row
                style={{
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <LocaltionPinIcon width={15} height={15} fill="gray" />
                <Text numberOfLines={1} style={{color: 'gray', marginLeft: 5}}>
                  {item.shopName}
                </Text>
              </Row>
            )}
            {item.reviewRate && (
              <Row style={{alignItems: 'center'}}>
                <StarIcon width={15} height={15} />
                <Text style={{color: 'gray', marginLeft: 5}}>
                  {item.reviewRate.toFixed(1)}
                </Text>
              </Row>
            )}
          </Row>
        )}
        <Text
          numberOfLines={item.shopName || item.reviewRate ? 1 : 2}
          style={{color: 'gray'}}>
          {item.description}
        </Text>
        <Text numberOfLines={1} style={{color: 'gray'}}>
          {formatDate(item.expirationDate)}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Button
          onPress={handleUseCoupon}
          variant={isSelected ? 'outline' : 'solid'}>
          {isSelected ? 'ยกเลิก' : 'ใช้คูปอง'}
        </Button>
        <View style={styles.linkContainer}>
          <Link>เงื่อนไข</Link>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#3F78E1',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FFFFFF',
    marginTop: 12,
    height: 120,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  linkContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

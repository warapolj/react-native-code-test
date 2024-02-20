import React from 'react';
import Modal from 'react-native-modal';
import {Coupon} from '../../services';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Row} from '../../components/Row';
import dayjs from 'dayjs';

interface IProps {
  selectedCoupon?: Coupon;
  onClose: () => void;
}
export default function CouponModal({selectedCoupon, onClose}: IProps) {
  if (!selectedCoupon) {
    return null;
  }

  return (
    <Modal
      isVisible={!!selectedCoupon}
      style={styles.modal}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      swipeDirection={'down'}
      onSwipeComplete={onClose}>
      <View style={styles.modalContent}>
        <View style={styles.modalIndicator} />
        <ScrollView
          bounces={false}
          style={{padding: 15}}
          contentContainerStyle={{paddingBottom: 50}}>
          <Text style={styles.header}>ระยะเวลาที่ใช้ได้</Text>
          <Text style={styles.label}>
            {dayjs(selectedCoupon.startDate).format('DD MMM YYYY HH:mm')}
            {' - '}
            {dayjs(selectedCoupon.expirationDate).format('DD MMM YYYY HH:mm')}
          </Text>
          <Text style={styles.header}>โค้ด</Text>
          <Text style={styles.label}>{selectedCoupon.code}</Text>
          <Text style={styles.header}>การชำระเงิน</Text>
          <Text style={styles.label}>{selectedCoupon.payment}</Text>
          <Text style={styles.header}>อุปกรณ์</Text>
          <Text style={styles.label}>{selectedCoupon.device}</Text>
          <Text style={styles.header}>เงื่อนไข</Text>
          <Text style={[styles.label, {marginBottom: 10}]}>
            {selectedCoupon.condition}
          </Text>
          {selectedCoupon.conditionDetails.map((detail, index) => (
            <Row key={index.toString()} style={{alignItems: 'center'}}>
              <View style={styles.dot} />
              <Text style={styles.label}>{detail}</Text>
            </Row>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
    height: '60%',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  label: {
    color: 'gray',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
    bottom: -5,
    marginRight: 5,
    marginLeft: 15,
  },
  modalIndicator: {
    width: '35%',
    height: 3,
    backgroundColor: 'lightgray',
    borderRadius: 6,
    alignSelf: 'center',
    bottom: -10,
  },
});

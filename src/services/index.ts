export interface Coupon {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  expirationDate: Date;
  image: string;
  shopName?: string;
  reviewRate?: number;
  code: string;
  payment: string;
  device: string;
  condition: string;
  conditionDetails: string[];
}

export function getMyCouponsService(): Array<Coupon> {
  return [
    {
      id: 'coupon-01',
      title: 'ส่งฟรีร้านยาคุณภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/200',
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
    {
      id: 'coupon-02',
      title: 'ส่งฟรีร้านยาคุณภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/200',
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
    {
      id: 'coupon-03',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/201',
      shopName: 'ชื่อร้าน',
      reviewRate: 4.9,
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
    {
      id: 'coupon-04',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/201',
      shopName: 'ชื่อร้าน',
      reviewRate: 3.7,
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
    {
      id: 'coupon-05',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/202',
      shopName: 'ชื่อร้าน',
      reviewRate: 4.9,
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
    {
      id: 'coupon-06',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/203',
      shopName: 'ชื่อร้าน',
      reviewRate: 3.0,
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
    {
      id: 'coupon-07',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      startDate: new Date('2024-10-1'),
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/204',
      shopName: 'ชื่อร้าน',
      reviewRate: 4.5,
      code: 'Free Shipping Voucher | โค้ดส่งฟรี',
      payment: 'ใช้ได้ทุกช่องทางการชำระเงิน',
      device: 'iOS, Android',
      condition: 'สำหรับคำสั่งซื้อครบ 500 บาทขึ้นไป',
      conditionDetails: [
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
        'lorem ipsum dolor sit amet',
      ],
    },
  ];
}

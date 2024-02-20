export interface Coupon {
  id: string;
  title: string;
  description: string;
  expirationDate: Date;
  image: string;
  shopName?: string;
  reviewRate?: number;
}

export function getMyCouponsService(): Array<Coupon> {
  return [
    {
      id: 'coupon-01',
      title: 'ส่งฟรีร้านยาคุณภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/200',
    },
    {
      id: 'coupon-02',
      title: 'ส่งฟรีร้านยาคุณภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/200',
    },
    {
      id: 'coupon-03',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/201',
      shopName: 'ชื่อร้าน',
      reviewRate: 4.9,
    },
    {
      id: 'coupon-04',
      title: 'ชุดตรวจสุขภาพ',
      description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
      expirationDate: new Date('2024-12-31'),
      image: 'https://picsum.photos/201',
      shopName: 'ชื่อร้าน',
      reviewRate: 3.7,
      },
      {
        id: 'coupon-05',
        title: 'ชุดตรวจสุขภาพ',
        description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
        expirationDate: new Date('2024-12-31'),
        image: 'https://picsum.photos/202',
        shopName: 'ชื่อร้าน',
        reviewRate: 4.9,
      },
      {
        id: 'coupon-06',
        title: 'ชุดตรวจสุขภาพ',
        description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
        expirationDate: new Date('2024-12-31'),
        image: 'https://picsum.photos/203',
        shopName: 'ชื่อร้าน',
        reviewRate: 3.0,
      },
      {
        id: 'coupon-07',
        title: 'ชุดตรวจสุขภาพ',
        description: 'คูปองส่งฟรี สามารถใช้ได้กับร้านยาคุณภาพทุกสาขาทั่วประเทศ',
        expirationDate: new Date('2024-12-31'),
        image: 'https://picsum.photos/204',
        shopName: 'ชื่อร้าน',
        reviewRate: 4.5,
      },
  ];
}

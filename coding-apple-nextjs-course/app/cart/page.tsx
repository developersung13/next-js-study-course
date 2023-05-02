import React from 'react';
import Item from './components/Item';

interface Item {
  id: number;
  name: string;
  unitPrice: string;
  totalPrice: string;
  quantity: number;
  orderNo: number;
  orderedDate: string;
  orderStatus: string;
}

export default function Cart() {
  const items: Item[] = [
    {
      id: 1,
      name: 'POLO KNIT_IVORY',
      unitPrice: '119,000',
      totalPrice: '238,000',
      quantity: 2,
      orderNo: 159348793,
      orderedDate: '2023-04-27',
      orderStatus: 'ready',
    },
    {
      id: 2,
      name: 'POLO KNIT_BLACK',
      unitPrice: '129,000',
      totalPrice: '387,000',
      quantity: 3,
      orderNo: 131283821,
      orderedDate: '2023-04-20',
      orderStatus: 'released',
    },
    {
      id: 3,
      name: 'POLO KNIT_GRAY',
      unitPrice: '139,000',
      totalPrice: '139,000',
      quantity: 1,
      orderNo: 128937283,
      orderedDate: '2023-04-01',
      orderStatus: 'Delivered',
    },
  ];

  return (
    <div className='h-screen mt-[1rem] items-center text-xs'>
      <h1 className='text-4xl text-center mb-10 tracking-[1.25rem] font-extralight'>
        CART
      </h1>
      <div className='w-screen flex flex-col items-center flex-wrap font-normal '>
        {items.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

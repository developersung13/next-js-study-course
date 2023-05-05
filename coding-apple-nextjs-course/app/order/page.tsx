import React from 'react';
import Item from './components/Item';

interface Item {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  size: number;
  orderNo: number;
  orderedDate: string;
  orderStatus: string;
}

export default function Order() {
  const items: Item[] = [
    {
      id: 1,
      name: 'POLO KNIT_IVORY',
      unitPrice: 119000,
      quantity: 2,
      size: 1,
      orderNo: 159348793,
      orderedDate: '2023-04-27',
      orderStatus: 'ready',
    },
    {
      id: 2,
      name: 'POLO KNIT_BLACK',
      unitPrice: 129000,
      quantity: 3,
      size: 3,
      orderNo: 131283821,
      orderedDate: '2023-04-20',
      orderStatus: 'released',
    },
    {
      id: 3,
      name: 'POLO KNIT_GRAY',
      unitPrice: 139000,
      quantity: 1,
      size: 1,
      orderNo: 128937283,
      orderedDate: '2023-04-01',
      orderStatus: 'Delivered',
    },
  ];

  return (
    <div className='grid h-screen  text-xs'>
      <h1 className='text-4xl text-center tracking-[1.25rem] font-extralight'>
        ORDER
      </h1>
      <div className='flex flex-col items-center flex-wrap font-light '>
        {items.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

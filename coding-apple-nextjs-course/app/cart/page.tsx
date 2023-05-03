import React from 'react';
import Item from './components/Item';

interface Item {
  id: number;
  name: string;
  unitPrice: number;
  size: number;
}

export default function Cart() {
  const items: Item[] = [
    {
      id: 1,
      name: 'POLO KNIT_IVORY',
      unitPrice: 119000,
      size: 1,
    },
    {
      id: 2,
      name: 'POLO KNIT_BLACK',
      unitPrice: 129000,
      size: 3,
    },
    {
      id: 3,
      name: 'POLO KNIT_GRAY',
      unitPrice: 139000,
      size: 2,
    },
  ];

  return (
    <div className='grid h-screen text-xs'>
      <h1 className='text-4xl text-center tracking-[1.25rem] font-extralight'>
        CART
      </h1>
      <div className='flex flex-col items-center flex-wrap font-normal'>
        {items.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
      <button className='mt-[5rem]'>Buy</button>
    </div>
  );
}

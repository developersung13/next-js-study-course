import React from 'react';
import Item from './components/Item';

interface Item {
  id: number;
  name: string;
  price: string;
}

export default function List() {
  const items: Item[] = [
    { id: 1, name: 'POLO KNIT_IVORY', price: '119,000' },
    { id: 2, name: 'POLO KNIT_BLACK', price: '129,000' },
    { id: 3, name: 'POLO KNIT_GRAY', price: '139,000' },
    { id: 4, name: 'POLO KNIT_FLOWER', price: '149,000' },
    { id: 5, name: 'BOUCLÉ COLLAR KNIT_ECRU', price: '159,000' },
    { id: 6, name: 'FULL ZIP KNIT CARDIGAN_BLUE', price: '169,000' },
  ];

  return (
    <div className='h-screen flex flex-col mt-[1rem] items-center text-xl'>
      <h1 className='text-4xl mb-10 tracking-[1.25rem] font-extralight'>
        ITEMS
      </h1>
      <div className='w-screen flex justify-center flex-wrap'>
        {items.map((item: Item, idx: number) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

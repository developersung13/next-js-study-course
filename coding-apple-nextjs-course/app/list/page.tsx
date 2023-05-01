import React from 'react';

interface Item {
  name: string;
  price: string;
}

export default function List() {
  const items: Item[] = [
    { name: 'POLO KNIT_IVORY', price: '119,000' },
    { name: 'POLO KNIT_BLACK', price: '129,000' },
    { name: 'POLO KNIT_GRAY', price: '139,000' },
    { name: 'POLO KNIT_FLOWER', price: '149,000' },
    { name: 'BOUCLÉ COLLAR KNIT_ECRU', price: '159,000' },
    { name: 'FULL ZIP KNIT CARDIGAN_BLUE', price: '169,000' },
  ];
  return (
    <div className='h-screen flex flex-col mt-[1rem] items-center text-xl'>
      <h1 className='text-4xl mb-10 tracking-[1.25rem] font-extralight'>
        ITEMS
      </h1>
      <div className='w-screen flex justify-center flex-wrap'>
        {items.map((item: Item, idx: number) => {
          return (
            <div key={idx} className='w-[20rem] pb-[4.5rem] p-1'>
              <img src={`/items/cloth_${idx + 1}.jpg`} alt={`${item.name}`} />
              <div className='pl-3'>
                <h4 className='text-neutral-500 tracking-wide font-light text-sm mt-2'>
                  {item.name}
                </h4>
                <strong className='font-normal text-sm'>₩ {item.price}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

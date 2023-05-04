import React from 'react';

interface Props {
  item: {
    id: number;
    name: string;
    price: number;
  };
}

export default function Item({ item }: Props) {
  return (
    <div className='w-[20rem] pb-[4.5rem] p-1'>
      <img src={`/items/cloth_${item.id}.jpg`} alt={`${item.name}`} />
      <div className='pl-3'>
        <h4 className='text-neutral-500 tracking-wide font-light text-sm mt-2'>
          {item.name}
        </h4>
        <strong className='font-normal text-sm'>
          ₩ {item.price.toLocaleString()}
        </strong>
      </div>
    </div>
  );
}

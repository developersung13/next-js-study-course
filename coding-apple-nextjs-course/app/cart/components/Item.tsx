'use client';

import React, { useState } from 'react';

interface Props {
  item: {
    id: number;
    name: string;
    unitPrice: number;
    size: number;
  };
}

export default function Item({ item }: Props) {
  const [stockCount, setStockCount] = useState(1);

  const increaseStockCountHandler = () => {
    if (stockCount == 99) {
      alert('You can select less than 100');
      return;
    }

    setStockCount((prev) => prev + 1);
  };

  const decreaseStockCountHandler = () => {
    if (stockCount == 1) return;
    setStockCount((prev) => prev - 1);
  };

  return (
    <div className='w-1/2 p-[0.5rem] mt-[-0.05rem] border-t border-b border-neutral-400'>
      <div className='flex h-[7rem] items-center'>
        <img
          src={`/items/${item.name}.jpg`}
          alt={`${item.name}`}
          style={{ width: 'auto', height: '120px' }}
        />
        <div className='basis-11/12 grid h-full place-content-start p-2'>
          <h4 className='tracking-[-0.025rem] text-sm font-medium'>
            {item.name}
          </h4>
          <span className='font-light tracking-tighter'>
            ₩ {(item.unitPrice * stockCount).toLocaleString()}
          </span>
          <span className='mt-3'>[size: {item.size}]</span>
          <div className='w-[6rem] flex items-center text-base mt-2 border-b-[0.5px] border-neutral-300'>
            <input
              className='w-12 text-left font-extralight'
              readOnly
              value={stockCount}
            />
            <button
              className='flex justify-center items-center pb-1 w-5 h-5 ml-1 text-xl bg-neutral-300'
              onClick={() => increaseStockCountHandler()}
            >
              <span className='font-thin'>+</span>
            </button>
            <button
              className='flex justify-center items-center pb-1 w-5 h-5 text-xl ml-[0.1rem] bg-neutral-200'
              onClick={() => decreaseStockCountHandler()}
            >
              <span className='font-thin'>-</span>
            </button>
          </div>
        </div>
        <div className='h-full'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='25'
              viewBox='0 96 960 960'
              width='25'
            >
              <path d='m252.846 825.154-22-22L458 576 230.846 348.846l22-22L480 554l227.154-227.154 22 22L502 576l227.154 227.154-22 22L480 598 252.846 825.154Z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

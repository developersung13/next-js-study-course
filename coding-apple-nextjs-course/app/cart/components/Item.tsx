import React from 'react';

interface Props {
  item: {
    id: number;
    name: string;
    unitPrice: string;
    totalPrice: string;
    quantity: number;
    orderNo: number;
    orderedDate: string;
    orderStatus: string;
  };
}

export default function Item({ item }: Props) {
  return (
    <div className='w-1/2 p-[0.5rem] pb-2 mb-5 border'>
      <div className='flex h-[6rem]'>
        <img
          src={`/items/cloth_${item.id}.jpg`}
          alt={`${item.name}`}
          style={{ width: 'auto', height: '100px' }}
        />
        <div className='grid h-4 pl-3'>
          <h4 className='text-neutral-500 tracking-wide font-light text-sm pt-2'>
            {item.name}
          </h4>
          <span className='font-medium text-sm tracking-tight'>
            ₩ {item.totalPrice}
          </span>
          <div className='flex'>
            <span className=''>
              Unit price:{' '}
              <span className='font-light tracking-tight'>
                ₩ {item.unitPrice}
              </span>
            </span>
            <span className='mx-2 font-thin before:content-["|"]' />
            <span className=''>
              Quantity: <span className='font-medium'>{item.quantity}</span>
            </span>
          </div>
        </div>
      </div>
      <div className='w-screen grid gap-1 mt-1'>
        <p>
          Order No:
          <span className='font-extralight'>&nbsp;{item.orderNo}</span>
        </p>
        <p>
          Ordered Date:
          <span className='font-medium'>&nbsp;{item.orderedDate}</span>
        </p>
        <p>
          Status:
          <span className='font-medium'>&nbsp;{item.orderStatus}</span>
        </p>
      </div>
    </div>
  );
}

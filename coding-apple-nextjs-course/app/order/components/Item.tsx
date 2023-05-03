import React from 'react';

interface Props {
  item: {
    id: number;
    name: string;
    unitPrice: number;
    totalPrice: number;
    quantity: number;
    size: number;
    orderNo: number;
    orderedDate: string;
    orderStatus: string;
  };
}

export default function Item({ item }: Props) {
  return (
    <div className='w-1/2 p-[0.5rem] pb-2 mt-5 border'>
      <div className='flex h-[7rem]'>
        <img
          src={`/items/cloth_${item.id}.jpg`}
          alt={`${item.name}`}
          style={{ width: 'auto', height: '120px' }}
        />
        <div className='grid h-full h-4 pl-3'>
          <h4 className='tracking-[-0.025rem] text-sm pt-1 font-medium'>
            {item.name}
          </h4>
          <span className='font-light tracking-tighter mt-[-0.75rem]'>
            ₩ {item.totalPrice.toLocaleString()}
          </span>
          <div className='flex mt-1 gap-2'>
            <span>
              Unit price:{' '}
              <span className='font-light tracking-tighter'>
                ₩ {item.unitPrice.toLocaleString()}
              </span>
            </span>
            <span className='font-thin before:content-["|"]' />
            <span>
              Quantity: <span className='font-medium'>{item.quantity}</span>
            </span>
          </div>
          <span className='mt-[-0.75rem]'>[size: {item.size}]</span>
        </div>
      </div>
      <div className='grid gap-1 mt-1'>
        <p>
          Order No:
          <span className='font-extralight'>&nbsp;{item.orderNo}</span>
        </p>
        <p>
          Ordered Date:
          <span className='font-medium tracking-tight'>
            &nbsp;{item.orderedDate}
          </span>
        </p>
        <p>
          Status:
          <span className='font-medium'>&nbsp;{item.orderStatus}</span>
        </p>
      </div>
    </div>
  );
}

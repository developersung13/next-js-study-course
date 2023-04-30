import React from 'react';

export default function List() {
  return (
    <div className='h-screen flex flex-col justify-center mt-[-12.5rem] items-center text-xl'>
      <h1 className='text-4xl mb-5 tracking-[1rem] font-extralight'>ITEMS</h1>
      <div className='grid grid-rows-2 gap-3 w-[20rem] pl-4 py-[1.5rem] bg-neutral-100 mb-5'>
        <h4 className='text-neutral-500 tracking-widest font-light'>ITEM #1</h4>
        <strong className='font-semibold'>$ 40</strong>
      </div>
      <div className='grid grid-rows-2 gap-3 w-[20rem] pl-4 py-[1.5rem] bg-neutral-100 mb-5'>
        <h4 className='text-neutral-500 tracking-widest  font-'>ITEM #2</h4>
        <strong className='font-semibold'>$ 40</strong>
      </div>
    </div>
  );
}

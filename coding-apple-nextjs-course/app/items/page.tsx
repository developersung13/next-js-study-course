'use client';

import React, { useEffect, useState } from 'react';
import Item from './components/Item';
import Loading from '../loading';

interface Item {
  _id: string;
  name: string;
  price: number;
}

export default function Items() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('/api/items');
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const items: Item[] = await res.json();
        setItems(items);
        setLoading(true);
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    };
    fetchItems();
  }, []);

  if (!loading) return <Loading />;

  return (
    <div className='h-screen flex flex-col mt-[1rem] text-xl'>
      <h1 className='text-4xl text-center mb-10 tracking-[1.25rem] font-extralight'>
        ITEMS
      </h1>
      <div className='w-screen flex justify-center flex-wrap'>
        {items.map((item) => {
          return <Item key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
}

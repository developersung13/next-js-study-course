import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='p-6 flex gap-[1.5rem] flex-row md:flex-row sticky top-0 tracking-tighter'>
      <Link href='/'>HOME</Link>
      <Link href='/list'>ITEMS</Link>
    </nav>
  );
}

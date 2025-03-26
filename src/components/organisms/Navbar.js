'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-[#ffffff] px-6 py-4 flex justify-between items-center'>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <Image
            src={dataSite.iconImage}
            alt='Policy Logo'
            width={90}
            height={90}
          />
          {/* Si quieres texto adicional, lo puedes dejar así */}
          {/* <span className='text-xl font-bold'>Policy</span> */}
        </div>
      </Link>
      <ul className='hidden md:flex gap-6 text-sm font-medium'>
        <li className='cursor-pointer'>
          <Link href='/#services'>Services</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/#about'>About Us</Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/#products'>Our Products</Link>
        </li>
        {/* <li className='cursor-pointer'>
          <Link href='/#references'>Reference</Link>
        </li> */}
      </ul>
      <Link href='/my-cart'>
        <button className='bg-[#2F5F53] text-white font-medium px-6 py-2 rounded-full text-sm'>
          Go to cart
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

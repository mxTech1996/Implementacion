'use client';
import { dataSite } from '@/data';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='bg-[#F1EEDF] text-center py-20 px-6'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4'>
        {dataSite.subtitle}
      </h1>
      <p className='text-gray-800 max-w-5xl mx-auto mb-8 text-lg'>
        {dataSite.description}
      </p>
      <div className='flex justify-center gap-4 flex-wrap'>
        <Link href='/#services'>
          <span className='bg-[#2F5F53] text-white font-semibold px-6 py-3 rounded-full cursor-pointer inline-block'>
            Get our Services
          </span>
        </Link>
        <Link href='/more-information'>
          <span className='border border-[#2F5F53] text-[#2F5F53] font-semibold px-6 py-3 rounded-full cursor-pointer inline-block'>
            Contact Us
          </span>
        </Link>
      </div>
    </section>
  );
}

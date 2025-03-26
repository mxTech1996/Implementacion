'use client';
import { dataSite } from '@/data';
import { useState } from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

function StarRating({ rating }) {
  const stars = Array.from({ length: 5 });

  return (
    <div className='flex justify-center mb-2'>
      {stars.map((_, index) => (
        <FaStar
          key={index}
          className={`h-5 w-5 ${
            index < rating ? 'text-[#F0AA06]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
export default function ReferenceCarousel() {
  const [current, setCurrent] = useState(0);

  const handleSelect = (index) => {
    setCurrent(index);
  };

  return (
    <section className='bg-[#F1EEDF] px-6 py-24 text-center'>
      <div className='text-3xl text-[#2F5F53] mb-6'>
        <FaQuoteRight className='mx-auto' />
      </div>
      <p className='text-xl md:text-2xl font-medium text-gray-900 max-w-3xl mx-auto mb-10'>
        {dataSite.references[current].description}
      </p>
      <div className='mb-2'>
        <p className='font-semibold text-gray-800'>
          {dataSite.references[current].name}
        </p>
        {/* <p className='text-sm text-gray-600'>Student</p> */}
      </div>
      {/* ⭐ RATING */}
      <StarRating rating={dataSite.references[current].rating} />

      {/* Indicadores */}
      <div className='flex justify-center mt-4 gap-3'>
        {dataSite.references.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-3 h-3 rounded-full border-2 transition ${
              index === current
                ? 'bg-[#2F5F53] border-[#2F5F53]'
                : 'border-[#2F5F53] bg-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

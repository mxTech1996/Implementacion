'use client';
import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Image from 'next/image';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

export default function MoreInformation() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  return (
    <main className='relative'>
      <Navbar />
      <section className='bg-white px-6 md:px-28 py-20 min-h-screen'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-2'>
            All Cleaning Products & Courses
          </h1>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            Browse our complete collection of cleaning tools, eco-supplies, and
            professional courses.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {dataSite.products.map((product) => {
            const existProduct = validateProductInCart(product.id);

            return (
              <div
                key={product.id}
                className='border rounded-xl p-4 shadow-sm hover:shadow-md transition'
              >
                <div className='w-full h-60 relative mb-4'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout='fill'
                    className='object-cover rounded-md'
                  />
                </div>
                <h3 className='font-semibold text-lg mb-1'>{product.name}</h3>
                <p className='text-sm text-gray-600 mb-2'>
                  {product.description}
                </p>
                <p className='text-[#2F5F53] font-semibold text-lg mb-4'>
                  ${product.price}
                </p>
                <button
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                  className='bg-[#2F5F53] text-white w-full py-2 rounded-full font-medium hover:opacity-90 transition'
                  style={{
                    backgroundColor: !existProduct ? '#2F5F53' : '#F0AA06FF',
                    color: 'white',
                  }}
                >
                  {existProduct ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}

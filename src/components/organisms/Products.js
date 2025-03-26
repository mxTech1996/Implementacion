'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPreview() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  return (
    <section id='products' className='bg-white px-6 md:px-28 py-20'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-2'>
          Professional Cleaning Products & Courses
        </h2>
        <p className='text-gray-700 max-w-2xl mx-auto'>
          Discover our best-selling kits and courses designed to elevate your
          cleaning standards.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {dataSite.products.slice(0, 3).map((product) => {
          const existProduct = validateProductInCart(product.id);

          return (
            <div
              key={product.id}
              className='border rounded-xl p-4 shadow-sm hover:shadow-md transition group'
            >
              <div className='w-full h-60 relative mb-4 overflow-hidden rounded-md'>
                <Image
                  src={product.image}
                  alt={product.name}
                  layout='fill'
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4'>
                  <p className='text-white text-sm text-center'>
                    {product.description}
                  </p>
                </div>
              </div>
              <h3 className='font-semibold text-lg mb-1'>{product.name}</h3>
              <p className='text-[#2F5F53] font-semibold text-lg mb-4'>
                ${product.price}
              </p>
              <button
                onClick={() => handleAddOrRemoveProduct(product.id)}
                style={{
                  backgroundColor: !existProduct ? '#2F5F53' : '#F0AA06FF',
                  color: 'white',
                }}
                className='w-full py-2 rounded-full font-medium hover:opacity-90 transition'
              >
                {existProduct ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>

      <div className='text-center'>
        <Link
          href='/products'
          className='border border-[#2F5F53] text-[#2F5F53] px-6 py-2 rounded-full hover:bg-[#2F5F53] hover:text-white transition'
        >
          View More
        </Link>
      </div>
    </section>
  );
}

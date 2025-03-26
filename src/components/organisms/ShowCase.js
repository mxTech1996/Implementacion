import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Showcase() {
  return (
    <section className='bg-[#F1EEDF] px-28 py-16'>
      {/* Grid de imágenes y avatar */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mb-16 items-end'>
        {/* Imagen 1 */}
        <div className='w-64 h-80 relative cursor-pointer'>
          <Image
            src={dataSite.image_hero}
            alt='Image 1'
            layout='fill'
            className='object-cover cursor-pointer'
          />
        </div>
        {/* Imagen 2 */}
        <div className='w-64 h-96 relative'>
          <Image
            src={dataSite.image_hero2}
            alt='Image 2'
            layout='fill'
            className='object-cover'
          />
        </div>

        {/* Avatar + Texto + Imagen 3 */}
        <div className='flex flex-col items-start'>
          {/* Avatares y texto */}
          <div className='flex items-center gap-2 mb-4'>
            <div className='flex -space-x-2'>
              <Image
                src='/images/avatar1.jpg'
                alt='Avatar 1'
                width={32}
                height={32}
                className='rounded-full border-2 border-white'
              />
              <Image
                src='/images/avatar2.jpg'
                alt='Avatar 2'
                width={32}
                height={32}
                className='rounded-full border-2 border-white'
              />
              <Image
                src='/images/avatar3.jpg'
                alt='Avatar 3'
                width={32}
                height={32}
                className='rounded-full border-2 border-white'
              />
            </div>
            <p className='font-semibold'>200+ Clients</p>
          </div>
          {/* Imagen 3 */}
          <div className='w-64 h-80 relative'>
            <Image
              src={dataSite.services[2].image}
              alt='Image 3'
              layout='fill'
              className='object-cover'
            />
          </div>
        </div>

        {/* Imagen 4 */}
        <div className='w-64 h-96 relative'>
          <Image
            src={dataSite.services[3].image}
            alt='Image 4'
            layout='fill'
            className='object-cover'
          />
        </div>
      </div>

      {/* Estadísticas */}
      <div className='bg-[#2F5F53] text-white py-10 px-4 rounded-lg grid grid-cols-1 md:grid-cols-3 text-center gap-6'>
        <div>
          <h3 className='text-3xl font-bold'>200+</h3>
          <p className='text-sm mt-2'>{dataSite.services[0].title}</p>
        </div>
        <div className='border-t md:border-t-0 md:border-l md:border-r border-white/40 py-4 md:py-0'>
          <h3 className='text-3xl font-bold'>40+</h3>
          <p className='text-sm mt-2'>{dataSite.services[1].title}</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>100+</h3>
          <p className='text-sm mt-2'>{dataSite.services[2].title}</p>
        </div>
      </div>
    </section>
  );
}

'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaLaptopHouse, FaUserShield, FaUndo } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id='about' className='bg-[#F1EEDF] px-6 md:px-28 py-20'>
      {/* Top section */}
      <div className='grid md:grid-cols-2 gap-10 items-center mb-16'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            We provide expert training & consulting for cleaning professionals
          </h2>
          <p className='text-gray-800 mb-6'>
            Our mission is to empower individuals and businesses with the
            skills, knowledge, and strategies to achieve high-standard,
            efficient, and eco-friendly cleaning practices.
          </p>
          <Link
            href='/more-information'
            className='inline-block bg-[#2F5F53] text-white font-medium px-6 py-3 rounded-full'
          >
            Contact Us
          </Link>
        </div>
        <div className='w-full h-[300px] md:h-[350px] relative'>
          <Image
            src={dataSite.services[4].image}
            alt='About us image'
            layout='fill'
            className='object-cover rounded-lg'
          />
        </div>
      </div>

      {/* Benefits */}
      <div className='grid md:grid-cols-3 gap-10'>
        {/* Card 1 */}
        <div className='flex items-start gap-4'>
          <Image
            src={dataSite.services[5].image}
            alt='Learning'
            width={80}
            height={80}
            className='rounded-lg object-cover'
          />
          <div>
            <FaLaptopHouse className='text-[#2F5F53] text-xl mb-2' />
            <h4 className='font-semibold'>Flexible Learning</h4>
            <p className='text-sm text-gray-700'>
              Learn at your own pace with online and in-person courses.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex items-start gap-4'>
          <Image
            src={dataSite.services[1].image}
            alt='Consulting'
            width={80}
            height={80}
            className='rounded-lg object-cover'
          />
          <div>
            <FaUserShield className='text-[#2F5F53] text-xl mb-2' />
            <h4 className='font-semibold'>Trusted Expertise</h4>
            <p className='text-sm text-gray-700'>
              Decades of combined experience in professional cleaning
              consulting.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex items-start gap-4'>
          <Image
            src={dataSite.services[6].image}
            alt='Satisfaction'
            width={80}
            height={80}
            className='rounded-lg object-cover'
          />
          <div>
            <FaUndo className='text-[#2F5F53] text-xl mb-2' />
            <h4 className='font-semibold'>Satisfaction Guarantee</h4>
            <p className='text-sm text-gray-700'>
              We’re confident in the quality of our training — or your money
              back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

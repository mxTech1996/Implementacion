'use client';
import Link from 'next/link';
import {
  FaHome,
  FaBuilding,
  FaLeaf,
  FaUsersCog,
  FaLightbulb,
} from 'react-icons/fa';

const services = [
  {
    title: 'Residential Cleaning Training',
    description:
      'Courses focused on best practices for effective and safe residential cleaning routines.',
    icon: <FaHome size={30} className='text-[#2F5F53]' />,
  },
  {
    title: 'Commercial Cleaning Strategies',
    description:
      'Guidance and training on advanced cleaning methods for offices, malls, and institutions.',
    icon: <FaBuilding size={30} className='text-[#2F5F53]' />,
  },
  {
    title: 'Green Cleaning Techniques',
    description:
      'Learn sustainable, eco-friendly cleaning methods using non-toxic products.',
    icon: <FaLeaf size={30} className='text-[#2F5F53]' />,
  },
  {
    title: 'Cleaning Staff Management',
    description:
      'Develop leadership skills and management strategies for supervising cleaning teams.',
    icon: <FaUsersCog size={30} className='text-[#2F5F53]' />,
  },
];

export default function CleaningServices() {
  return (
    <section id='services' className='px-36 py-16 bg-white'>
      <div className='flex justify-between items-center mb-12 flex-wrap gap-4'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          Cleaning services made smarter
        </h2>
        <Link
          href='/services'
          className='border border-[#2F5F53] text-[#2F5F53] px-6 py-2 rounded-full hover:bg-[#2F5F53] hover:text-white transition'
        >
          View More
        </Link>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-[#F1EEDF] p-6 rounded-lg flex flex-col gap-4 shadow-sm hover:shadow-md transition'
          >
            <div>{service.icon}</div>
            <h3 className='text-lg font-semibold'>{service.title}</h3>
            <p className='text-sm text-gray-700'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

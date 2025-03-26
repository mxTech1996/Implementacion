'use client';
import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import {
  FaBroom,
  FaHandsWash,
  FaSprayCan,
  FaRecycle,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaShieldAlt,
  FaIndustry,
  FaTools,
} from 'react-icons/fa';

const extendedServices = [
  {
    title: 'Deep Cleaning Certification',
    icon: <FaBroom size={28} className='text-[#2F5F53]' />,
    description:
      'Professional training for thorough cleaning procedures in residential and commercial environments.',
  },
  {
    title: 'Sanitization & Disinfection',
    icon: <FaHandsWash size={28} className='text-[#2F5F53]' />,
    description:
      'Learn effective sanitization techniques and chemical usage to meet safety standards.',
  },
  {
    title: 'Eco-Friendly Product Training',
    icon: <FaSprayCan size={28} className='text-[#2F5F53]' />,
    description:
      'Courses on using safe, sustainable, and effective cleaning agents.',
  },
  {
    title: 'Waste Management Consulting',
    icon: <FaRecycle size={28} className='text-[#2F5F53]' />,
    description:
      'Strategies for handling waste and promoting sustainable cleaning practices.',
  },
  {
    title: 'Trainer Certification Program',
    icon: <FaChalkboardTeacher size={28} className='text-[#2F5F53]' />,
    description:
      'Become a certified cleaning trainer and help others grow in the industry.',
  },
  {
    title: 'Quality Control Audits',
    icon: <FaClipboardCheck size={28} className='text-[#2F5F53]' />,
    description:
      'Guidelines and checklists for evaluating cleaning quality and consistency.',
  },
  {
    title: 'Workplace Safety & Compliance',
    icon: <FaShieldAlt size={28} className='text-[#2F5F53]' />,
    description:
      'Ensure your team follows regulations and maintains a safe work environment.',
  },
  {
    title: 'Industrial Cleaning Consulting',
    icon: <FaIndustry size={28} className='text-[#2F5F53]' />,
    description:
      'Specialized services for factories, warehouses, and high-traffic industrial areas.',
  },
  {
    title: 'Equipment Maintenance Training',
    icon: <FaTools size={28} className='text-[#2F5F53]' />,
    description:
      'Learn how to maintain and safely operate cleaning equipment and tools.',
  },
];

export default function MoreInformation() {
  return (
    <main className='relative'>
      <Navbar />
      <section className='min-h-screen px-36 py-16 bg-white'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>
            Explore Our Full Range of Cleaning Services
          </h1>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            From training your cleaning team to offering strategic guidance for
            your business, we help you raise your cleaning standards with
            professional knowledge and tools.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {extendedServices.map((service, i) => (
            <div
              key={i}
              className='bg-[#F1EEDF] p-6 rounded-xl shadow-sm hover:shadow-md transition'
            >
              <div className='mb-4'>{service.icon}</div>
              <h3 className='font-semibold text-lg mb-2'>{service.title}</h3>
              <p className='text-sm text-gray-700'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import HeroSection from '@/components/organisms/HeroSection';
import Showcase from '@/components/organisms/ShowCase';
import CleaningServices from '@/components/organisms/Services';
import AboutSection from '@/components/organisms/AboutSection';
import ProductsSection from '@/components/organisms/Products';
import ReferenceCarousel from '@/components/organisms/References';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#DEF8EBFF',
      }}
    >
      <Navbar />
      <HeroSection />
      <Showcase />
      <CleaningServices />
      <ProductsSection />
      <AboutSection />
      <ReferenceCarousel />
      <Footer />
    </main>
  );
}

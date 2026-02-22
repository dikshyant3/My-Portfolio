import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { NewsSection } from '../sections/NewsSection';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <NewsSection />
    </>
  );
};

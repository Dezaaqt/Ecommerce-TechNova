import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </>
  );
};

export default HomePage;
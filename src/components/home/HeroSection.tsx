import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-blue-400"></div>
        <div className="absolute -left-20 -bottom-20 h-[600px] w-[600px] rounded-full bg-blue-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforming Ideas Into <span className="text-blue-300">Digital Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            We create cutting-edge websites, applications, and digital experiences that drive growth and innovation for forward-thinking businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              Explore Our Services
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right" 
              className="border-white text-white hover:bg-blue-800/30"
            >
              Get a Free Consultation
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 justify-start items-center text-sm text-blue-200">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span>Award-winning Team</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-20 w-full fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C203,17.93,406,64.6,608.65,97.41,706.41,118.83,805.06,128.31,902.5,108"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
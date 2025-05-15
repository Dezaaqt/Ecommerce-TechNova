import React from 'react';
import Button from '../ui/Button';
import { Zap } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's collaborate to create innovative technology solutions that drive your business forward. 
            Our team of experts is ready to help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              icon={Zap}
            >
              Get a Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-blue-700"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
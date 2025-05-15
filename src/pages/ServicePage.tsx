import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  process: {
    title: string;
    description: string;
  }[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  features,
  image,
  process
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                {description}
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-white text-blue-800 hover:bg-blue-50"
              >
                Request a Quote
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive {title.toLowerCase()} services offer everything you need for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg">
              We follow a proven methodology to ensure successful outcomes for every project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex mb-12 relative">
                {/* Step number */}
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  {index < process.length - 1 && (
                    <div className="h-full w-px bg-blue-200 absolute left-6 top-12 ml-px"></div>
                  )}
                </div>
                
                {/* Step content */}
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and learn how our {title.toLowerCase()} services can help you achieve your goals.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50"
            icon={ArrowRight}
            iconPosition="right"
          >
            Contact Us Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
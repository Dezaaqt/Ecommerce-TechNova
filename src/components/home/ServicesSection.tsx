import React from 'react';
import { Code, Smartphone, Palette, Briefcase, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  return (
    <Card hoverable className="flex flex-col h-full">
      <div className="p-4 bg-blue-50 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a 
        href={href} 
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
      </a>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Web Development",
      description: "Custom-built, responsive websites and web applications designed to elevate your digital presence and drive results.",
      href: "/services/web-development"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      href: "/services/app-development"
    },
    {
      icon: <Palette className="h-6 w-6 text-blue-600" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging interfaces and seamless user experiences.",
      href: "/services/ui-ux-design"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to optimize your digital infrastructure and drive business transformation.",
      href: "/services/it-consulting"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            We deliver comprehensive technology solutions tailored to your unique business needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            icon={ArrowRight} 
            iconPosition="right"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
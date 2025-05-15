import React from 'react';
import { Clock, Zap, Award, Users, Shield, Headphones } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Turnaround",
      description: "We deliver projects efficiently without compromising on quality, ensuring you meet your deadlines."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cutting-edge Technology",
      description: "Our solutions leverage the latest technologies to keep you ahead of the competition."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award-winning Quality",
      description: "Our work has been recognized for excellence in design, development, and user experience."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Team",
      description: "Work with a committed team of experts who are passionate about your project's success."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Solutions",
      description: "We prioritize security in everything we build, protecting your data and your users."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Our support team is always available to address any issues or questions you may have."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechNova</h2>
          <p className="text-gray-600 text-lg">
            We combine technical expertise with a strategic approach to deliver exceptional results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
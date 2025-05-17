import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechNova</h1>
            <p className="text-xl text-blue-100 mb-8">
              We're a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
              <div className="flex items-center text-blue-600">
                <Target className="h-6 w-6 mr-2" />
                <span className="font-medium">Driving Digital Excellence</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To be the leading technology partner for businesses worldwide, known for our innovation, expertise, and commitment to client success.
              </p>
              <div className="flex items-center text-blue-600">
                <Zap className="h-6 w-6 mr-2" />
                <span className="font-medium">Shaping the Future</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experts behind TechNova's success and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                name: "Emily Rodriguez",
                role: "Design Director",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide everything we do at TechNova.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from code quality to client service."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership to achieve exceptional results."
              },
              {
                title: "Integrity",
                description: "We operate with complete transparency and always put our clients' interests first."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative technology solutions.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
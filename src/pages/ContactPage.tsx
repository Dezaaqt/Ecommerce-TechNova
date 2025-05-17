import React from 'react';
import ContactSection from '../components/home/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with our team to discuss your project or learn more about our services.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ContactPage;
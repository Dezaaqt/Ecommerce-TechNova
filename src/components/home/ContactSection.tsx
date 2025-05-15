import React from 'react';
import Button from '../ui/Button';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to learn more about our services? Fill out the form below, and we'll get back to you promptly.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg" 
                  icon={Send}
                  fullWidth
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Reach out to us directly or visit our office. We're always ready to discuss your project and provide the guidance you need.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-gray-600">
                    123 Innovation Street<br />
                    Tech Valley, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:+14155552671" className="hover:text-blue-600 transition-colors">
                      (415) 555-2671
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Address</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@technova.com" className="hover:text-blue-600 transition-colors">
                      info@technova.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Interactive Map Would Be Displayed Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
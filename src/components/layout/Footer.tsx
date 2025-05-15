import React from 'react';
import { Monitor, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 mr-2 text-blue-400" />
              <span className="font-bold text-xl">TechNova</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into exceptional digital experiences with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/web-development" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/app-development" className="text-gray-400 hover:text-blue-400 transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="/services/ui-ux-design" className="text-gray-400 hover:text-blue-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/services/it-consulting" className="text-gray-400 hover:text-blue-400 transition-colors">
                  IT Consulting
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  All Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Street<br />
                  Tech Valley, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+14155552671" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:info@technova.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@technova.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="hover:text-blue-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
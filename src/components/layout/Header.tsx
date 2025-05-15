import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { 
    title: 'Services', 
    href: '/services',
    children: [
      { title: 'Web Development', href: '/services/web-development' },
      { title: 'App Development', href: '/services/app-development' },
      { title: 'UI/UX Design', href: '/services/ui-ux-design' },
      { title: 'IT Consulting', href: '/services/it-consulting' },
    ] 
  },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(prev => prev === title ? null : title);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-blue-600">
          <Monitor className="h-8 w-8 mr-2" />
          <span className={`font-bold text-xl transition-colors duration-300 ${
            isScrolled ? 'text-blue-600' : 'text-blue-600'
          }`}>
            TechNova
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <button 
                className={`font-medium transition-colors hover:text-blue-600 flex items-center ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
                onClick={() => item.children && toggleDropdown(item.title)}
              >
                {item.title}
                {item.children && (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </button>
              
              {/* Dropdown */}
              {item.children && openDropdown === item.title && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-10">
                  {item.children.map((child) => (
                    <a 
                      key={child.title} 
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Button variant="primary">Get a Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  <button 
                    className="font-medium text-gray-800 w-full text-left py-2 flex justify-between items-center"
                    onClick={() => item.children && toggleDropdown(item.title)}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.children && openDropdown === item.title && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100">
                      {item.children.map((child) => (
                        <a 
                          key={child.title} 
                          href={child.href}
                          className="block py-2 text-gray-700 hover:text-blue-600"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="primary" fullWidth>Get a Quote</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
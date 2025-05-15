import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "TechNova transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "GlobalTech Solutions",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 2,
    content: "Working with TechNova on our mobile app was an excellent experience. They understood our vision from day one and built a product that our users love. Their technical expertise and attention to detail are unmatched.",
    author: "David Chen",
    position: "CTO",
    company: "Innovate Inc.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 3,
    content: "TechNova's IT consulting services helped us streamline our operations and reduce costs by 30%. Their strategic recommendations were tailored to our specific needs and have had a tremendous impact on our business.",
    author: "Michael Rodriguez",
    position: "Operations Manager",
    company: "NextGen Retail",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. See what our clients have to say about working with TechNova.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            {/* Testimonial Content */}
            <div className="mb-8">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
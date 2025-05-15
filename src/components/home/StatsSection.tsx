import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const CountUp: React.FC<StatProps> = ({ 
  value, 
  suffix = "", 
  label, 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, value, duration]);
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: 250, suffix: "+", label: "Completed Projects" },
    { value: 50, suffix: "+", label: "Active Clients" },
    { value: 15, suffix: "+", label: "Industry Awards" },
    { value: 98, suffix: "%", label: "Client Satisfaction" }
  ];
  
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CountUp 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
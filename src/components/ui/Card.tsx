import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className = '', 
  children, 
  hoverable = false 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-sm p-6 
        ${hoverable ? 'transition-all duration-300 hover:shadow-md hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
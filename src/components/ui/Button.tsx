import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-200 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow",
    secondary: "bg-blue-100 hover:bg-blue-200 text-blue-800",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50"
  };
  
  const sizeStyles = {
    sm: "text-sm py-1.5 px-3",
    md: "py-2 px-4",
    lg: "text-lg py-3 px-6"
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={`${children ? 'mr-2' : ''} h-5 w-5`} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={`${children ? 'ml-2' : ''} h-5 w-5`} />}
    </button>
  );
};

export default Button;
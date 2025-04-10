import { cn } from '@/lib/utils';
import React from 'react';

const buttonVariants = {
  primary: 'bg-[#1463FF] text-white hover:opacity-90',
  'primary-outline': 'border border-[#1463FF] text-[#1463FF] bg-transparent hover:bg-[#1463FF] hover:text-white',
  secondary: 'bg-[#0E0B3D] text-white hover:opacity-90',
  'outline-secondary': 'border border-[#0E0B3D] text-[#0E0B3D] bg-transparent hover:bg-[#0E0B3D] hover:text-white',
  ghost: 'bg-transparent text-[#0E0B3D] hover:bg-gray-100',
  white: 'bg-white text-[#1463FF] hover:bg-gray-50',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button
      className={cn(
        'cursor-pointer font-bold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export default Button;

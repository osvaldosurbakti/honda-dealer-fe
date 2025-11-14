import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const shadowStyles = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

export default function Card({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  border = true,
  hover = false,
}: CardProps) {
  const borderStyle = border ? 'border border-gray-200' : '';
  const hoverStyle = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  
  const combinedClassName = `
    bg-white rounded-xl
    ${paddingStyles[padding]}
    ${shadowStyles[shadow]}
    ${borderStyle}
    ${hoverStyle}
    ${className}
  `.trim();

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}
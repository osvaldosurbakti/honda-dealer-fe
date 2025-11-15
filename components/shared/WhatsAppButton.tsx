'use client';

import { contactInfo } from '@/data/contact';

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'floating';
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  phone = contactInfo.whatsapp.number,
  message = contactInfo.whatsapp.message,
  variant = 'primary',
  className = '',
  children
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-green-500 text-white hover:bg-green-600 px-6 py-3",
    secondary: "bg-white text-green-600 border border-green-600 hover:bg-green-50 px-6 py-3", 
    floating: "bg-green-500 text-white hover:bg-green-600 w-14 h-14 rounded-full shadow-lg"
  };

  const content = children || (
    <span className="flex items-center space-x-2">
      <span>💬</span>
      <span>WhatsApp</span>
    </span>
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {content}
    </a>
  );
}
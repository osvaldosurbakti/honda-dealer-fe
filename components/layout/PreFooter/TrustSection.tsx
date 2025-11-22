'use client';

import { 
  Shield,
  Award,
  Users,
  CheckCircle,
} from 'lucide-react';
import { FaShieldAlt } from 'react-icons/fa';
import TestimonialCarousel from './TestimonialCarousel';

export default function TrustSection() {
  return (
    <div className="text-center lg:text-left">
      {/* Header */}
      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-honda-red to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
          <FaShieldAlt className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Dealer Terpercaya</h3>
          <p className="text-sm text-gray-600 mt-1">Resmi & Berpengalaman</p>
        </div>
      </div>
      
      {/* Trust Points */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3 text-gray-700">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="text-sm">Authorized Honda Dealer</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <Award className="w-5 h-5 text-honda-red flex-shrink-0" />
          <span className="text-sm">Garansi resmi 3 tahun</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <Users className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <span className="text-sm">1,000+ pelanggan puas</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-sm">Service after-sales lengkap</span>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="mt-6">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
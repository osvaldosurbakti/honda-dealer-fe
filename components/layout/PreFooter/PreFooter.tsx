'use client';

import { contactInfo } from '@/data/contact';
import { siteConfig } from '@/lib/config/site';
import { 
  Phone, 
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  Car,
  CheckCircle,
  Navigation,
  CreditCard
} from 'lucide-react';
import { 
  FaWhatsapp,
  FaShieldAlt
} from 'react-icons/fa';
import TestimonialCarousel from './TestimonialCarousel';
import BlogPreview from './BlogPreview';

export default function PreFooter() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/60 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Column 1: Trust & Credibility - Diperkecil */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-honda-red to-red-600 rounded-xl flex items-center justify-center shadow-md">
                <FaShieldAlt className="text-white text-lg" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Dealer Terpercaya</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-xs">Authorized Honda Dealer</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Award className="w-4 h-4 text-honda-red flex-shrink-0" />
                <span className="text-xs">Garansi 3 tahun</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-xs">1,000+ pelanggan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-xs">Service lengkap</span>
              </div>
            </div>

            {/* Testimonial Carousel - Diperkecil */}
            <div className="mt-4">
              <TestimonialCarousel />
            </div>
          </div>

          {/* Column 2: Quick Action & CTA - Diperkecil */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                <Car className="text-white text-lg" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Butuh Honda?</h3>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-gray-600 text-xs">
                Konsultasi gratis dengan Rendy
              </p>
            </div>

            <div className="space-y-2">
              {/* WhatsApp - Primary CTA */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 group text-sm"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat WhatsApp</span>
              </a>
              
              {/* Test Drive Booking */}
              <a
                href="/test-drive"
                className="block bg-gradient-to-r from-honda-red to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group text-sm"
              >
                <Car className="w-4 h-4" />
                <span>Test Drive</span>
              </a>

              {/* Simulasi Kredit */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent('Halo, saya ingin simulasi kredit mobil Honda')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-amber-400 text-amber-700 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-2 group text-sm"
              >
                <CreditCard className="w-4 h-4" />
                <span>Simulasi Kredit</span>
              </a>
            </div>
          </div>

          {/* Column 3: Location & Map - Diperkecil */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <MapPin className="text-white text-lg" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Lokasi</h3>
            </div>
            
            {/* Google Maps Embed - Diperkecil */}
            <div className="mb-3 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.62517524256!2d112.66129752283722!3d-7.286090828765811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fda9b71de18d%3A0xcbf8ea89e4e029af!2sHonda%20Prisma%20HR%20Muhammad!5e0!3m2!1sen!2sid!4v1763277260243!5m2!1sen!2sid" 
                width="100%" 
                height="120"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Lokasi Honda Prisma HR Muhammad"
              />
            </div>

            {/* Location Info - Diperkecil */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-gray-700">
                <MapPin className="w-4 h-4 text-honda-red flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-xs font-semibold">Honda Prisma HR Muhammad</p>
                  <p className="text-xs text-gray-600 leading-tight">{contactInfo.dealer.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-4 h-4 text-honda-red flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-semibold">Jam Buka</p>
                  <p className="text-xs text-gray-600">{contactInfo.workingHours.hours}</p>
                </div>
              </div>

              {/* Directions Button - Diperkecil */}
              <a
                href="https://maps.google.com/?q=Honda+Prisma+HR+Muhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 bg-honda-red text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors text-xs font-semibold mt-1"
              >
                <Navigation className="w-3 h-3" />
                <span>Petunjuk</span>
              </a>
            </div>
          </div>

          {/* Column 4: Blog Preview - Lebih Maksimal */}
          <div className="lg:col-span-1">
            <BlogPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
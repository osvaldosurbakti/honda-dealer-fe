// src/components/layout/PreFooter/PreFooter.tsx
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
  Navigation
} from 'lucide-react';
import { 
  FaWhatsapp,
  FaShieldAlt
} from 'react-icons/fa';

export default function PreFooter() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/60 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1: Trust & Credibility */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-honda-red to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dealer Resmi Terpercaya</h3>
            </div>
            
            <div className="space-y-4">
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
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm">Layanan 24/7 untuk pelanggan</span>
              </div>
            </div>
          </div>
{/* Column 2: Quick Action & CTA */}
<div className="text-center">
  <div className="flex items-center justify-center space-x-3 mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
      <Car className="text-white text-xl" />
    </div>
    <h3 className="text-xl font-bold text-gray-900">Butuh Mobil Honda?</h3>
  </div>
  
  <div className="space-y-4 mb-6">
    <p className="text-gray-600 text-sm">
      Konsultasi gratis dengan sales profesional kami
    </p>
    
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
      <div className="flex items-center justify-center space-x-2 text-yellow-800">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-semibold">Response 5 menit</span>
      </div>
    </div>
  </div>

  <div className="space-y-3">
    {/* WhatsApp - Primary CTA */}
    <a
      href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 group"
    >
      <FaWhatsapp className="text-xl" />
      <span>Chat WhatsApp Sekarang</span>
    </a>
    
    {/* Test Drive Booking - Secondary CTA */}
    <a
      href="/test-drive"
      className="block bg-gradient-to-r from-honda-red to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2 group"
    >
      <Car className="w-5 h-5" />
      <span>Booking Test Drive</span>
    </a>
    
    {/* Telepon - Tertiary CTA */}
    <a
      href={`tel:${contactInfo.phones.primary}`}
      className="block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-honda-red hover:text-honda-red hover:bg-red-50 transition-all duration-300 flex items-center justify-center space-x-2 group"
    >
      <Phone className="w-5 h-5" />
      <span>Telepon Langsung</span>
    </a>
  </div>
</div>

          {/* Column 3: Location & Map */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Lokasi Dealer</h3>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mb-4 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.62517524256!2d112.66129752283722!3d-7.286090828765811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fda9b71de18d%3A0xcbf8ea89e4e029af!2sHonda%20Prisma%20HR%20Muhammad!5e0!3m2!1sen!2sid!4v1763277260243!5m2!1sen!2sid" 
                width="100%" 
                height="200"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48 lg:h-52"
                title="Lokasi Honda Prisma HR Muhammad"
              />
            </div>

            {/* Location Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-honda-red flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-sm font-semibold">Honda Prisma HR Muhammad</p>
                  <p className="text-xs text-gray-600">{contactInfo.dealer.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <Clock className="w-5 h-5 text-honda-red flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-semibold">Jam Operasional</p>
                  <p className="text-xs text-gray-600">{contactInfo.workingHours.hours}</p>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://maps.google.com/?q=Honda+Prisma+HR+Muhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-honda-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold mt-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Dapatkan Petunjuk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
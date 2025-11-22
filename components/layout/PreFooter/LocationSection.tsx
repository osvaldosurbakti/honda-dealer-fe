'use client';

import { contactInfo } from '@/data/contact';
import { 
  MapPin,
  Clock,
  Navigation,
  Building
} from 'lucide-react';

export default function LocationSection() {
  return (
    <div className="text-center lg:text-left">
      {/* Header */}
      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Building className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Lokasi Kami</h3>
          <p className="text-sm text-gray-600 mt-1">Kunjungi Showroom</p>
        </div>
      </div>
      
      {/* Google Maps Embed */}
      <div className="mb-4 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63321.62517524256!2d112.66129752283722!3d-7.286090828765811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fda9b71de18d%3A0xcbf8ea89e4e029af!2sHonda%20Prisma%20HR%20Muhammad!5e0!3m2!1sen!2sid!4v1763277260243!5m2!1sen!2sid" 
          width="100%" 
          height="160"
          style={{ border: 0 }}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="Lokasi Honda Prisma HR Muhammad"
        />
      </div>

      {/* Location Info */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3 text-gray-700">
          <MapPin className="w-5 h-5 text-honda-red flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">Honda Prisma HR Muhammad</p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{contactInfo.dealer.address}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-700">
          <Clock className="w-5 h-5 text-honda-red flex-shrink-0" />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">Jam Operasional</p>
            <p className="text-sm text-gray-600 mt-1">{contactInfo.workingHours.hours}</p>
          </div>
        </div>

        {/* Directions Button */}
        <a
          href="https://maps.google.com/?q=Honda+Prisma+HR+Muhammad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-honda-red text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold mt-2 shadow-md hover:shadow-lg"
        >
          <Navigation className="w-4 h-4" />
          <span>Dapatkan Petunjuk</span>
        </a>
      </div>
    </div>
  );
}
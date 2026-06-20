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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.786243170802!2d112.7413055!3d-7.265150399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f94c5cd66cc7%3A0x1e543c6b695b8b99!2sHonda%20Surabaya%20Center!5e0!3m2!1sen!2sid!4v1781613623653!5m2!1sen!2sid"
          width="100%" 
          height="160"
          style={{ border: 0 }}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
          title="Lokasi Honda Istana Mobil Surabaya Indah"
        />
      </div>

      {/* Location Info */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3 text-gray-700">
          <MapPin className="w-5 h-5 text-honda-red flex-shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">Honda Istana Mobil Surabaya Indah</p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{contactInfo.dealer.address}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-700">
          <Clock className="w-5 h-5 text-honda-red shrink-0" />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">Jam Operasional</p>
            <p className="text-sm text-gray-600 mt-1">{contactInfo.workingHours.hours}</p>
          </div>
        </div>

        {/* Directions Button */}
        <a
          href="https://maps.google.com/?q=Honda+Istana+Mobil+Surabaya+Indah"
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
import ContactForm from '@/components/forms/ContactForm';
import { contactInfo } from '@/data/contact';
import { 
  Phone, 
  Mail, 
  MessageCircle,
  Facebook,
  Instagram,
  Star,
  Car,
  CreditCard,
} from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have one
const TiktokIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105z"/>
  </svg>
);

export default function KontakPage() {
  const primarySales = contactInfo.salesTeam[0];
  const primaryContact = contactInfo.phones.primary;
  const whatsappNumber = contactInfo.whatsapp.number;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50/30 py-4 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-red-200">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 fill-current" />
            Honda Sales Specialist
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hubungi <span className="text-red-600">Rendy</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Saya siap membantu Anda menemukan mobil Honda impian dengan pelayanan terbaik. 
            Mari diskusikan kebutuhan mobil Anda!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Personal Info Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-6 sm:p-8 transform hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0 mb-6">
                <div className="relative self-center sm:self-auto">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-red-100 shadow-lg sm:shadow-xl">
                    <img 
                      src={primarySales.photo || "/images/sales/rendy.jpg"} 
                      alt={primarySales.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-linear-to-r from-green-500 to-green-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-md sm:shadow-lg">
                    ONLINE
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{primarySales.name}</h3>
                  <p className="text-red-600 font-semibold text-base sm:text-lg mb-2">{primarySales.position}</p>
                  <div className="flex items-center justify-center sm:justify-start text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Pengalaman: {primarySales.experience}
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 bg-linear-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl border border-gray-200">
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-red-600 mb-1">100+</div>
                  <div className="text-xs text-gray-600 font-medium">Mobil Terjual</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-red-600 mb-1">98%</div>
                  <div className="text-xs text-gray-600 font-medium">Kepuasan</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold text-red-600 mb-1">24/7</div>
                  <div className="text-xs text-gray-600 font-medium">Layanan</div>
                </div>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                <div className="w-2 h-6 sm:w-3 sm:h-8 bg-blue-600 rounded mr-3 sm:mr-4"></div>
                Channel Kontak
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 sm:p-5 bg-linear-to-r from-green-50 to-green-100 rounded-xl sm:rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg flex-shrink-0">
                    <MessageCircle className="text-white w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">WhatsApp</h4>
                    <p className="text-green-700 font-medium text-sm sm:text-base truncate">{primaryContact}</p>
                  </div>
                  <div className="bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-sm flex-shrink-0 ml-2">
                    Online
                  </div>
                </a>

                {/* Telepon */}
                <a
                  href={`tel:${primaryContact}`}
                  className="flex items-center p-4 sm:p-5 bg-linear-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg flex-shrink-0">
                    <Phone className="text-white w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">Telepon</h4>
                    <p className="text-blue-700 font-medium text-sm sm:text-base truncate">{primaryContact}</p>
                  </div>
                  <div className="bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-sm flex-shrink-0 ml-2">
                    Langsung
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.emails.primary}`}
                  className="flex items-center p-4 sm:p-5 bg-linear-to-r from-red-50 to-red-100 rounded-xl sm:rounded-2xl hover:from-red-100 hover:to-red-200 transition-all duration-300 border border-red-200 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg flex-shrink-0">
                    <Mail className="text-white w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">Email</h4>
                    <p className="text-red-700 font-medium text-sm sm:text-base truncate">{contactInfo.emails.primary}</p>
                  </div>
                  <div className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-sm flex-shrink-0 ml-2">
                    24 Jam
                  </div>
                </a>

                {/* Social Media */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  {contactInfo.socialMedia.facebook && (
                    <a
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-3 sm:p-4 bg-linear-to-r from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200 shadow-sm hover:shadow-md"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                        <Facebook className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-semibold text-gray-900 text-xs sm:text-sm">Facebook</span>
                    </a>
                  )}

                  {contactInfo.socialMedia.instagram && (
                    <a
                      href={`https://instagram.com/${contactInfo.socialMedia.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-3 sm:p-4 bg-gradient-to-r from-pink-50 to-purple-100 rounded-xl sm:rounded-2xl hover:from-pink-100 hover:to-purple-200 transition-all duration-300 border border-pink-200 shadow-sm hover:shadow-md"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                        <Instagram className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-semibold text-gray-900 text-xs sm:text-sm">Instagram</span>
                    </a>
                  )}

                  {contactInfo.socialMedia.tiktok && (
                    <a
                      href={`https://tiktok.com/${contactInfo.socialMedia.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-3 sm:p-4 bg-gradient-to-r from-gray-800 to-black rounded-xl sm:rounded-2xl hover:from-gray-700 hover:to-gray-900 transition-all duration-300 border border-gray-700 shadow-sm hover:shadow-md"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg">
                        <TiktokIcon className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-semibold text-white text-xs sm:text-sm">TikTok</span>
                    </a>
                  )}
                </div>


                {/* Quick Tips */}
<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
  <h4 className="font-bold text-green-900 mb-3 flex items-center">
    <MessageCircle className="w-4 h-4 mr-2" />
    Tips Cepat Hubungi
  </h4>
  <ul className="text-sm text-green-800 space-y-2">
    <li className="flex items-start">
      <span className="text-green-600 mr-2">•</span>
      WhatsApp untuk respon tercepat
    </li>
    <li className="flex items-start">
      <span className="text-green-600 mr-2">•</span>
      Siapkan data untuk simulasi kredit
    </li>
    <li className="flex items-start">
      <span className="text-green-600 mr-2">•</span>
      Booking test drive 1 hari sebelumnya
    </li>
  </ul>
</div>

<div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
  <h4 className="font-bold text-red-900 mb-3 flex items-center">
    <Star className="w-4 h-4 mr-2 fill-red-500" />
    Penawaran Spesial
  </h4>
  <div className="space-y-2 text-sm text-red-800">
    <div className="flex items-center space-x-2">
      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">GRATIS</span>
      <span>Konsultasi kredit</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">BONUS</span>
      <span>Free accessories terbatas</span>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form & Additional Info */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-2xl p-6 sm:p-8 border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center justify-center sm:justify-start">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-red-600" />
                  Kirim <span className="text-red-600 ml-1 sm:ml-2">Pesan</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center sm:text-left">
                  Isi form di bawah ini dan saya akan menghubungi Anda dalam waktu 1x24 jam.
                </p>
              </div>
              
              <ContactForm />
            </div>

            {/* Service Buttons */}
            <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-lg sm:shadow-2xl transform hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Car className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold">Layanan Eksklusif</h3>
              </div>
              <p className="mb-6 sm:mb-8 text-red-100 text-base sm:text-lg leading-relaxed">
                Dapatkan pengalaman terbaik dengan layanan lengkap kami
              </p>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {/* Test Drive Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin jadwalkan test drive mobil Honda.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-red-600 px-4 py-4 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-2xl flex items-center justify-center space-x-3 sm:space-x-4"
                >
                  <Car className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-lg">Booking Test Drive</span>
                </a>

                {/* Credit Simulation Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo, saya ingin simulasi kredit untuk mobil Honda.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-amber-400 text-gray-900 px-4 py-4 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl font-bold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg sm:shadow-2xl flex items-center justify-center space-x-3 sm:space-x-4"
                >
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-lg">Simulasi Kredit</span>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-red-400/30 rounded-xl sm:rounded-2xl border border-red-400/50">
                <div className="flex items-center justify-center space-x-2 text-red-100">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  <span className="font-semibold text-sm sm:text-base">Gratis konsultasi kredit & proses cepat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
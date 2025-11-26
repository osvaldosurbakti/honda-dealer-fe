'use client';

import { contactInfo } from '@/data/contact';
import { 
  MessageCircle, 
  Phone, 
  Mail,
  Shield,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { 
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function FeaturesCTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      {/* Background Image dengan Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/backgroundrendy.jpg")',
        }}
      />
      
      {/* Overlay Gradient untuk meningkatkan readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/90" />
      
      {/* Additional Pattern Overlay untuk texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/40" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-6 h-6 bg-honda-red/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 right-8 animate-bounce delay-500">
        <div className="w-4 h-4 bg-blue-400/40 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Left Column - Contact & Social */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Header */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-honda-red/20 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Konsultasi Gratis
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Temukan Mobil Honda{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent animate-gradient">
                  Perfect Match
                </span>{' '}
                untuk Anda
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                "...Saya siap membantu menemukan pilihan Mobil Honda yang paling tepat sesuai kebutuhan dan budget Anda..."
              </p>
              <div className="w-20 lg:w-24 h-1.5 bg-gradient-to-r from-honda-red to-red-400 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 lg:space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-honda-red to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <span>Ingin Info Lebih Cepat?</span>
                </h3>
                
                <div className="space-y-3 lg:space-y-4">
                  {/* Phone/WhatsApp */}
                  <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/20 group hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="text-white text-xl lg:text-2xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs lg:text-sm text-gray-300 font-medium">WhatsApp & Telepon</p>
                      <p className="text-lg lg:text-xl font-bold text-white mt-1 truncate">{contactInfo.phones.primary}</p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <a 
                          href={`https://wa.me/${contactInfo.whatsapp.number}`}
                          className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-1 backdrop-blur-sm"
                        >
                          <FaWhatsapp className="w-3 h-3" />
                          WhatsApp
                        </a>
                        <a 
                          href={`tel:${contactInfo.phones.primary}`}
                          className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-1 backdrop-blur-sm"
                        >
                          <Phone className="w-3 h-3" />
                          Telepon
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/20 group hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white text-xl lg:text-2xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs lg:text-sm text-gray-300 font-medium">Email</p>
                      <p className="text-base lg:text-lg font-bold text-white mt-1 truncate">{contactInfo.emails.primary}</p>
                      <a 
                        href={`mailto:${contactInfo.emails.primary}`}
                        className="text-xs text-blue-300 hover:text-blue-200 font-medium mt-2 inline-flex items-center gap-1 transition-colors"
                      >
                        Kirim Email <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dealer Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Dealer Identity */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 lg:gap-3 bg-honda-red/20 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-2xl mb-4 lg:mb-6 text-sm lg:text-base backdrop-blur-sm">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="font-bold">Dealer Resmi Honda</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-4">
                Daffa Honda{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent animate-gradient">
                  Surabaya
                </span>
              </h3>
              <div className="w-16 lg:w-20 h-1.5 bg-gradient-to-r from-honda-red to-red-400 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Main Description */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20 transform hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
                  <strong className="text-red-300">Honda Surabaya</strong> - Melayani penjualan mobil secara{' '}
                  <strong className="text-white">Cash dan Credit</strong> untuk All-Type Mobil Honda. Pengajuan kredit melalui Mitra Finance 
                  dengan <strong className="text-white">DP Rendah dan Angsuran Terjangkau</strong>.
                </p>

                <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-xl p-4 text-center animate-pulse backdrop-blur-sm">
                  <p className="text-amber-200 text-sm font-medium">
                    💡 <strong>Harga promo dan cashback tersedia!</strong> Hubungi kami untuk info terbaru.
                  </p>
                </div>

                <p className="text-base lg:text-lg text-gray-200 leading-relaxed">
                  Pembelian secara Credit? Anda bebas memilih pembiayaan sendiri atau sesuai rekomendasi dari{' '}
                  <strong className="text-white">Sales Consultant Terbaik</strong> kami. Hubungi melalui telepon, WhatsApp, email, 
                  atau social media yang tersedia.
                </p>
              </div>

              {/* Social Media - Integrated */}
              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-white/20">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left">Ikuti Kami di Social Media</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
                  {contactInfo.socialMedia.facebook && (
                    <a 
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="w-full aspect-square bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl lg:rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:from-blue-700 group-hover:to-blue-800 p-3 backdrop-blur-sm">
                        <FaFacebookF className="text-lg lg:text-2xl mb-1 lg:mb-2" />
                        <span className="text-xs font-semibold text-center">Facebook</span>
                      </div>
                    </a>
                  )}
                  {contactInfo.socialMedia.instagram && (
                    <a 
                      href={`https://instagram.com/${contactInfo.socialMedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="w-full aspect-square bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl lg:rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-3 backdrop-blur-sm">
                        <FaInstagram className="text-lg lg:text-2xl mb-1 lg:mb-2" />
                        <span className="text-xs font-semibold text-center">Instagram</span>
                      </div>
                    </a>
                  )}
                  {contactInfo.socialMedia.tiktok && (
                    <a 
                      href={`https://tiktok.com/${contactInfo.socialMedia.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="w-full aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl lg:rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-3 backdrop-blur-sm">
                        <FaTiktok className="text-lg lg:text-2xl mb-1 lg:mb-2" />
                        <span className="text-xs font-semibold text-center">TikTok</span>
                      </div>
                    </a>
                  )}
                  <a 
                    href="/kontak"
                    className="group"
                  >
                    <div className="w-full aspect-square bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl lg:rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-3 backdrop-blur-sm">
                      <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 mb-1 lg:mb-2" />
                      <span className="text-xs font-semibold text-center">Lainnya</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Mega CTA */}
        <div className={`mt-12 lg:mt-20 text-center transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-honda-red/90 to-red-600/90 rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl transform -skew-y-1 lg:-skew-y-2 backdrop-blur-sm"></div>
            <div className="relative bg-gradient-to-r from-honda-red/80 to-red-600/80 rounded-2xl lg:rounded-3xl p-6 lg:p-12 shadow-xl lg:shadow-2xl border border-red-400/30 backdrop-blur-md">
              <div className="flex items-center justify-center mb-3 lg:mb-4">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-white">
                  Siap Memiliki Honda Impian?
                </h3>
              </div>
              <p className="text-base lg:text-xl text-red-100 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
                Jangan ragu! Hubungi kami sekarang untuk konsultasi gratis, test drive, 
                dan penawaran spesial eksklusif.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent('Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut dan penawaran spesial?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-honda-red px-6 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg lg:shadow-2xl hover:shadow-xl lg:hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-2 lg:gap-3 text-base lg:text-lg w-full sm:w-auto min-w-[200px] transform hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <FaWhatsapp className="text-xl lg:text-2xl" />
                  WhatsApp Sekarang
                </a>
                <a
                  href={`tel:${contactInfo.phones.primary}`}
                  className="bg-transparent border-2 border-white text-white px-6 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold hover:bg-white hover:text-honda-red transition-all duration-300 shadow-lg lg:shadow-2xl hover:shadow-xl lg:hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-2 lg:gap-3 text-base lg:text-lg w-full sm:w-auto min-w-[200px] transform hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                  Telepon Langsung
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4 lg:mt-6 text-red-200 text-sm">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Respons cepat
                </span>
                <span>•</span>
                <span>Buka setiap hari</span>
                <span>•</span>
                <span>Free konsultasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(-45deg, #f87171, #ef4444, #f87171, #ef4444);
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}
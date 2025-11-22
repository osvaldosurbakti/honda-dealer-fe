'use client';

import { contactInfo } from '@/data/contact';
import { 
  Car,
  CreditCard,
  MessageCircle,
  Share2
} from 'lucide-react';
import { 
  FaTiktok,
  FaFacebookF
} from 'react-icons/fa';

export default function CTASection() {
  return (
    <div className="text-center lg:text-left">
      {/* Header */}
      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Car className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Butuh Honda?</h3>
          <p className="text-sm text-gray-600 mt-1">Konsultasi Gratis</p>
        </div>
      </div>
      
      {/* Description */}
      <div className="space-y-3 mb-6">
        <p className="text-gray-600 text-sm leading-relaxed">
          Hubungi Rendy untuk informasi lengkap, test drive, dan penawaran spesial.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        {/* WhatsApp - Primary */}
        <a
          href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-3 group"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat WhatsApp</span>
        </a>
        
        {/* Test Drive - Secondary */}
        <a
          href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
          className="block bg-gradient-to-r from-honda-red to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
        >
          <Car className="w-5 h-5" />
          <span>Booking Test Drive</span>
        </a>

        {/* Simulasi Kredit - Tertiary */}
        <a
          href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent('Halo, saya ingin simulasi kredit mobil Honda')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-amber-400 text-amber-700 px-6 py-3 rounded-xl font-semibold hover:bg-amber-50 hover:border-amber-500 transition-all duration-300 flex items-center justify-center space-x-3 group"
        >
          <CreditCard className="w-5 h-5" />
          <span>Simulasi Kredit</span>
        </a>

        {/* Social Media Section */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-3 font-medium">Follow Kami:</p>
          
          <div className="flex justify-center lg:justify-start space-x-3">
            {/* TikTok Button */}
            {contactInfo.socialMedia.tiktok && (
              <a 
                href={`https://tiktok.com/${contactInfo.socialMedia.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-24 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <FaTiktok className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">TikTok</span>
              </a>
            )}

            {/* Facebook Button */}
            {contactInfo.socialMedia.facebook && (
              <a 
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <FaFacebookF className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Facebook</span>
              </a>
            )}

            {/* Share Button - Fallback jika social media tidak ada */}
            {!contactInfo.socialMedia.tiktok && !contactInfo.socialMedia.facebook && (
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Rendy Honda Surabaya',
                      text: 'Temukan mobil Honda terbaru dengan penawaran spesial',
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link berhasil disalin!');
                  }
                }}
                className="flex-1 max-w-24 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs">Share</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
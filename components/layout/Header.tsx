'use client';

import { useState } from 'react';
import Link from 'next/link';
import { contactInfo } from '@/data/contact';
import { siteConfig } from '@/lib/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation yang disederhanakan - HANYA Home dan Mobil
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Mobil', href: '/mobil' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar dengan Kontak */}
      <div className="bg-honda-red text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="flex items-center">
                📞 {contactInfo.phones.primary}
              </span>
              <span className="hidden md:flex items-center">
                ✉️ {contactInfo.emails.primary}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                🕐 {contactInfo.workingHours.days}: {contactInfo.workingHours.hours}
              </span>
              <div className="flex space-x-2">
                {contactInfo.socialMedia.instagram && (
                  <a 
                    href={`https://instagram.com/${contactInfo.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition"
                  >
                    📷
                  </a>
                )}
                {contactInfo.socialMedia.facebook && (
                  <a 
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition"
                  >
                    📘
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-honda-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">
                {siteConfig.company.name}
              </h1>
              <p className="text-sm text-gray-600">Dealer Resmi Honda</p>
            </div>
          </Link>

          {/* Desktop Navigation - HANYA 3 menu */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-honda-red font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <a
              href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200 flex items-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - HANYA 3 menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-honda-red font-medium py-2 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                💬 WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
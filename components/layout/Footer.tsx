'use client';

import Link from 'next/link';
import { contactInfo } from '@/data/contact';
import { siteConfig } from '@/lib/config/site';
import Image from 'next/image';

import { 
  Phone, 
  Clock,
} from 'lucide-react';
import { 
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-2xl">
        <div className="container mx-auto px-4">
          {/* Main Footer Content - Compact */}
          <div className="py-2 lg:py-3">
            <div className="flex items-center justify-between">
              
              {/* Logo & Company */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-honda-red to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/logos/honda-logo.svg"
                    alt="Honda Official Dealer"
                    width={20}
                    height={20}
                    className="object-contain filter brightness-0 invert lg:w-8 lg:h-8"
                    priority
                  />
                </div>
                <div className="block">
                  <h3 className="font-bold text-gray-900 text-xs lg:text-sm leading-tight">
                    {siteConfig.company.name}
                  </h3>
                  <p className="text-gray-600 text-[10px] lg:text-xs leading-none">
                    Dealer Resmi Honda
                  </p>
                </div>
              </div>

              {/* Developer Credit - Minimal */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <a
                  href="https://osvaldosurbakti.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] lg:text-xs text-gray-500 hover:text-honda-red transition-colors group flex items-center space-x-1"
                  title="Visit Developer Portfolio"
                >
                  <span>By</span>
                  <span className="font-semibold text-gray-700 group-hover:text-honda-red">
                    OS
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="border-t border-gray-200/50 bg-gray-50/50">
          <div className="container mx-auto px-4 py-1 lg:py-2">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs">
              
              {/* Copyright */}
              <div className="flex items-center space-x-2 lg:space-x-4 mb-1 lg:mb-0">
                <p className="text-gray-600 text-[10px] lg:text-xs">
                  © {currentYear} {siteConfig.company.name}. All rights reserved.
                </p>
              </div>

              {/* Contact Info & Social */}
              <div className="flex items-center space-x-2 lg:space-x-4">
                
                {/* Contact Info - Compact */}
                <div className="hidden xs:flex items-center space-x-2 lg:space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Phone className="w-2 h-2 lg:w-3 lg:h-3" />
                    <span className="text-[10px] lg:text-xs">{contactInfo.phones.primary}</span>
                  </div>
                  <div className="hidden sm:flex items-center space-x-1">
                    <Clock className="w-2 h-2 lg:w-3 lg:h-3" />
                    <span className="text-[10px] lg:text-xs">{contactInfo.workingHours.hours}</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-1 lg:space-x-2">
                  {contactInfo.socialMedia.tiktok && (
                    <a 
                      href={`https://tiktok.com/${contactInfo.socialMedia.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 lg:w-6 lg:h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-honda-red hover:text-white transition-all group"
                    >
                      <FaTiktok className="text-gray-600 text-[10px] lg:text-xs group-hover:text-white transition-colors" />
                    </a>
                  )}
                  {contactInfo.socialMedia.facebook && (
                    <a 
                      href={contactInfo.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 lg:w-6 lg:h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"
                    >
                      <FaFacebookF className="text-gray-600 text-[10px] lg:text-xs group-hover:text-white transition-colors" />
                    </a>
                  )}
                  {contactInfo.socialMedia.instagram && (
                    <a 
                      href={`https://instagram.com/${contactInfo.socialMedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 lg:w-6 lg:h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group"
                    >
                      <FaInstagram className="text-gray-600 text-[10px] lg:text-xs group-hover:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Spacer untuk konten agar tidak tertutup footer */}
      <div className="h-20 lg:h-28"></div>

      {/* Floating WhatsApp Button - Secondary */}
      <div className="fixed bottom-20 lg:bottom-24 right-4 lg:right-6 z-50">
        <a
          href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2 lg:p-3 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 group"
          title="Chat via WhatsApp"
        >
          <FaWhatsapp className="text-lg lg:text-xl" />
          <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-4 h-4 lg:w-5 lg:h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] lg:text-xs font-bold">!</span>
          </div>
        </a>
      </div>
    </>
  );
}
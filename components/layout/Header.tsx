'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo } from '@/data/contact';
import { siteConfig } from '@/lib/config/site';
import { 
  Phone, 
  Mail, 
  Clock,
  MapPin,
  Car,
} from 'lucide-react';
import { 
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaMedal
} from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: <FaStar className="w-4 h-4" /> },
    { name: 'Products', href: '/mobil', icon: <Car className="w-4 h-4" /> },
    { name: 'Contact', href: '/kontak', icon: <MapPin className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50 relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-linear-to-r from-honda-red/10 to-red-600/10 animate-pulse"></div>
        
        <div className="container mx-auto px-4 py-2 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs">
            {/* Left Section - Contact Info */}
            <div className="flex items-center space-x-4 lg:space-x-6 mb-2 lg:mb-0 flex-wrap justify-center lg:justify-start">
              {/* Phone - Always visible */}
              <div className="flex items-center space-x-2 group">
                <div className="w-5 h-5 bg-honda-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white w-3 h-3" />
                </div>
                <a 
                  href={`tel:${contactInfo.phones.primary}`}
                  className="text-white/90 hover:text-white transition-all font-medium hover:underline text-xs lg:text-sm"
                >
                  {contactInfo.phones.primary}
                </a>
              </div>
              
              {/* Email - Hidden on small mobile, visible on larger mobile */}
              <div className="hidden xs:flex items-center space-x-2 group">
                <div className="w-5 h-5 bg-honda-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white w-3 h-3" />
                </div>
                <a 
                  href={`mailto:${contactInfo.emails.primary}`}
                  className="text-white/90 hover:text-white transition-all hover:underline text-xs lg:text-sm"
                >
                  {contactInfo.emails.primary}
                </a>
              </div>

              {/* Location - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:flex items-center space-x-2 group">
                <div className="w-5 h-5 bg-honda-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="text-white w-3 h-3" />
                </div>
                <span className="text-white/90 text-xs lg:text-sm">
                  {contactInfo.dealer.city}
                </span>
              </div>
            </div>
            
            {/* Right Section - Hours & Social */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Working Hours */}
              <div className="flex items-center space-x-2 group">
                <div className="w-5 h-5 bg-honda-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="text-white w-3 h-3" />
                </div>
                <span className="text-white/90 font-medium text-xs lg:text-sm">
                  {contactInfo.workingHours.hours}
                </span>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-2">
                {contactInfo.socialMedia.tiktok && (
                  <a 
                    href={`https://tiktok.com/${contactInfo.socialMedia.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 lg:w-7 lg:h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-honda-red transition-all group border border-white/20 hover:border-honda-red"
                  >
                    <FaTiktok className="text-white text-xs group-hover:scale-110 transition-transform" />
                  </a>
                )}
                {contactInfo.socialMedia.facebook && (
                  <a 
                    href={contactInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 lg:w-7 lg:h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all group border border-white/20 hover:border-blue-600"
                  >
                    <FaFacebookF className="text-white text-xs group-hover:scale-110 transition-transform" />
                  </a>
                )}
                {contactInfo.socialMedia.instagram && (
                  <a 
                    href={`https://instagram.com/${contactInfo.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 lg:w-7 lg:h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all group border border-white/20 hover:border-pink-600"
                  >
                    <FaInstagram className="text-white text-xs group-hover:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 shadow-2xl backdrop-blur-xl border-b border-gray-200/60' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 lg:space-x-4 group"
              onClick={() => setActiveNav('/')}
            >
              <div className="relative">
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-linear-to-br from-honda-red to-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-2 border-white overflow-hidden">
                  {/* Animated Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-r from-honda-red/0 via-white/20 to-honda-red/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Subtle Pulse */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 animate-pulse"></div>
                  
                  <Image
                    src="/images/logos/honda-logo.svg"
                    alt="Honda Official Dealer"
                    width={28}
                    height={28}
                    className="object-contain filter brightness-0 invert relative z-10 group-hover:scale-110 transition-transform duration-300 lg:w-8 lg:h-8"
                    priority
                  />
                </div>
                <div className="absolute -inset-2 bg-honda-red/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
              
              {/* Text Section - Adjusted for mobile */}
              <div className="block">
                <h1 className="text-lg lg:text-2xl font-bold text-gray-900 tracking-tight bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text leading-tight">
                  {siteConfig.company.name}
                </h1>
                <div className="flex items-center space-x-1 lg:space-x-2 mt-0.5 lg:mt-1">
                  <FaMedal className="text-honda-red w-3 h-3 lg:w-4 lg:h-4" />
                  <p className="text-xs lg:text-sm text-gray-600 font-semibold leading-none">
                    Authorized Honda Dealer
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 bg-white/80 rounded-2xl px-3 py-2 backdrop-blur-sm border border-gray-200/60 shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative group ${
                    activeNav === item.href
                      ? 'text-honda-red bg-red-50 shadow-md'
                      : 'text-gray-700 hover:text-honda-red hover:bg-white'
                  }`}
                  onClick={() => setActiveNav(item.href)}
                >
                  <span className={`transition-colors ${
                    activeNav === item.href ? 'text-honda-red' : 'text-gray-400 group-hover:text-honda-red'
                  }`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-honda-red rounded-full group-hover:w-8 transition-all duration-300 ${
                    activeNav === item.href ? 'w-8' : ''
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* WhatsApp Primary */}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaWhatsapp className="text-xl relative" />
                <span className="relative">Chat WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 lg:p-3 rounded-xl bg-linear-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-lg border border-gray-200/60"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 flex flex-col justify-between relative">
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 lg:py-6 border-t border-gray-200/60 bg-white/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border">
              <nav className="flex flex-col space-y-2 lg:space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 lg:space-x-4 px-4 lg:px-6 py-3 lg:py-4 rounded-xl font-semibold transition-all duration-300 group border ${
                      activeNav === item.href
                        ? 'text-honda-red bg-red-50 border-red-200 shadow-md'
                        : 'text-gray-700 border-transparent hover:text-honda-red hover:bg-gray-50 hover:border-gray-200'
                    }`}
                    onClick={() => {
                      setActiveNav(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className={`transition-colors ${
                      activeNav === item.href ? 'text-honda-red' : 'text-gray-400 group-hover:text-honda-red'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="flex-1 text-sm lg:text-base">{item.name}</span>
                    <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 bg-honda-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      activeNav === item.href ? 'opacity-100' : ''
                    }`}></div>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-2 lg:space-y-3 mt-4 lg:mt-6 px-3 lg:px-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-linear-to-r from-green-500 to-green-600 text-white px-4 lg:px-6 py-3 lg:py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg text-center flex items-center justify-center space-x-2 lg:space-x-3 text-sm lg:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWhatsapp className="text-lg lg:text-xl" />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
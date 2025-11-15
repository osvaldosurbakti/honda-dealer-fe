'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ChevronRight, Star, Shield, MapPin, Phone, MessageCircle, Award, Users, Car } from 'lucide-react';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const backgroundImages = [
    '/images/sales/rendy.jpg',
    '/images/sales/rendy1.jpg',
    '/images/sales/rendy2.jpg',
    '/images/sales/rendy3.jpg',
    '/images/sales/rendy4.jpg',
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-honda-red">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-red-900/40 animate-gradient-x"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float-fast"></div>
        </div>

        {/* Background Images with Enhanced Transitions */}
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentImage 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-honda-red/20 via-transparent to-blue-900/20"></div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-bounce opacity-40 delay-75"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-50 delay-150"></div>
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-white rounded-full animate-bounce opacity-30 delay-200"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-white relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content with Animations */}
          <div className={`space-y-8 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge with Animation */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 animate-fade-in">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Dealer Resmi Honda Terpercaya
                </span>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Main Heading with Stagger Animation */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up">
                  Selamat Datang di{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 animate-gradient bg-300%">
                    Rendy Honda Surabaya
                  </span>
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-slide-up delay-200">
                  Temukan mobil Honda impian Anda dengan{' '}
                  <span className="text-yellow-300 font-semibold">harga terbaik</span> dan{' '}
                  <span className="text-yellow-300 font-semibold">pelayanan premium</span>. 
                  Dealer resmi terpercaya di Surabaya.
                </p>
              </div>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in delay-300">
              {[
                { icon: Shield, text: 'Garansi Resmi', color: 'text-green-400' },
                { icon: Award, text: 'Kualitas Terbaik', color: 'text-yellow-400' },
                { icon: Users, text: 'Pelayanan Ramah', color: 'text-blue-400' },
              ].map((feature, index) => (
                <div 
                  key={feature.text}
                  className="flex items-center gap-3 text-white/90 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="text-sm font-medium group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                <a
                  href={`https://wa.me/6287852432636?text=${encodeURIComponent('Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group"
                >
                  <Button 
                    size="lg" 
                    variant="primary"
                    className="w-full group-hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                  >
                    <span className="flex items-center gap-2 relative z-10">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </a>
                
                <a 
                  href="tel:087852432636"
                  className="flex-1 group"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 group-hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telepon
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-3 animate-fade-in delay-700">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-out transform ${
                index === currentImage 
                  ? 'bg-yellow-400 w-8 scale-110 shadow-lg shadow-yellow-400/50' 
                  : 'bg-white/50 hover:bg-white/70 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
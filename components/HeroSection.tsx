'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ChevronRight, Star, Shield, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    '/images/sales/rendy.jpg',
    '/images/sales/rendy1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-honda-red">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-32 w-5 h-5 bg-white rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-white relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold">Dealer Resmi Honda Terpercaya</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Selamat Datang di{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                  Honda Prisma
                </span>{' '}
                Surabaya
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Temukan mobil Honda impian Anda dengan harga terbaik dan pelayanan terpercaya. Dealer resmi dengan pengalaman melayani masyarakat Surabaya.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm font-medium">Garansi Resmi</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm font-medium">Pelayanan Premium</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-sm font-medium">Lokasi Strategis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/mobil" className="flex-1">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full group"
                >
                  <span className="flex items-center gap-2">
                     Lihat Katalog Mobil
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <div className="flex flex-col sm:flex-row gap-2 flex-1">
                <a
                  href={`https://wa.me/6287852432636?text=${encodeURIComponent('Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button 
                    size="lg" 
                    variant="primary"
                    className="w-full group"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </span>
                  </Button>
                </a>
                <a 
                  href="tel:087852432636"
                  className="flex-1"
                >
                </a>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  Mengapa Memilih Kami?
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white/80">Mobil Tersedia</span>
                    <span className="text-yellow-400 font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white/80">Tahun Pengalaman</span>
                    <span className="text-yellow-400 font-bold">10+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white/80">Pelanggan Puas</span>
                    <span className="text-yellow-400 font-bold">1000+</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-sm">
                    Bergabunglah dengan keluarga besar Honda Prisma Surabaya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
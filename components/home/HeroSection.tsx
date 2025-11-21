'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { Star, Shield, Phone, MessageCircle, Award, Users } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-honda-red">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* YouTube Embed */}
        <div className="absolute inset-0">
  <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/hicwJKCSJsY?autoplay=1&mute=1&loop=1&playlist=hicwJKCSJsY&controls=0&showinfo=0&rel=0&modestbranding=1&background=1&enablejsapi=1"
            className="w-full h-full object-cover scale-105"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {/* Enhanced Overlay untuk meningkatkan readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-linear-to-br from-honda-red/30 via-transparent to-blue-900/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
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


            {/* Main Heading with Stagger Animation */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up">
                  Selamat Datang di{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-200 animate-gradient bg-300%">
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
                    <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

          {/* Right Column - Optional untuk konten tambahan */}
          <div className="hidden lg:block">
            {/* Space untuk konten di sebelah kanan jika diperlukan */}
          </div>
        </div>
      </div>
    </section>
  );
}
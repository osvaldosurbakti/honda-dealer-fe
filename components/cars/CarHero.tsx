'use client';

import Image from 'next/image';
import { Car } from '@/types/car';
import { Phone, MessageCircle, Settings, Fuel, Users, Luggage } from 'lucide-react';

interface CarHeroProps {
  car: Car;
}

export default function CarHero({ car }: CarHeroProps) {
  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop';

  // Fallback values untuk data yang optional
  const transmission = car.variants[0]?.transmission || 'CVT';
  const fuelType = car.variants[0]?.fuelType || 'Bensin';
  const seating = car.specs?.capacity?.seating || '5 Seater';
  const luggage = car.specs?.capacity?.luggage || '400 Liter';
  const startingPrice = car.variants[0]?.priceFormatted || `Rp ${car.startingPrice.toLocaleString('id-ID')}`;

  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-6 lg:py-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-800 rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src={car.images.main || fallbackImage}
                alt={car.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 lg:top-4 lg:left-4 flex flex-col space-y-2">
                {car.isNew && (
                  <span className="bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
                    NEW
                  </span>
                )}
                {car.isFeatured && (
                  <span className="bg-red-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                <span className="bg-gray-900/80 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
                  {car.category}
                </span>
              </div>

              {/* Year Badge */}
              <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4">
                <span className="bg-black/70 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                  {car.year}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-400 mb-3 lg:mb-4">
              Home / Mobil / {car.category} / {car.name}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 lg:mb-4">
              {car.name}
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
              {car.shortDescription}
            </p>
            
            {/* Quick Specs - Mobile Horizontal Scroll */}
            <div className="mb-6 lg:mb-8">
              <div className="flex lg:grid lg:grid-cols-4 gap-3 lg:gap-4 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
                {/* Transmission */}
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Settings className="w-6 h-6 lg:w-8 lg:h-8 text-red-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Transmisi</div>
                    <div className="text-sm lg:text-base font-semibold">{transmission}</div>
                  </div>
                </div>
                
                {/* Fuel Type */}
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Fuel className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Bahan Bakar</div>
                    <div className="text-sm lg:text-base font-semibold">{fuelType}</div>
                  </div>
                </div>
                
                {/* Seating Capacity */}
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-green-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Kapasitas</div>
                    <div className="text-sm lg:text-base font-semibold">{seating}</div>
                  </div>
                </div>
                
                {/* Luggage Capacity */}
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Luggage className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Bagasi</div>
                    <div className="text-sm lg:text-base font-semibold">{luggage}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 lg:mb-8">
              <div className="text-gray-400 text-sm mb-2">Harga Mulai Dari</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600">
                {startingPrice}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                {car.priceRange} • {car.typeCount} tipe tersedia
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#variants"
                className="flex-1 bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center flex items-center justify-center gap-2 group"
              >
                <span>Lihat Semua Tipe</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <div className="flex flex-row gap-3">
                <a
                  href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name} ${car.year}. Bisa info detail dan test drive?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                
                <a
                  href="tel:087852432636"
                  className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 transition text-center flex items-center justify-center gap-2 group"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Telepon</span>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 lg:mt-6 p-3 bg-gray-800/30 rounded-lg">
              <div className="text-xs text-gray-400 text-center lg:text-left">
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">✓</span> Test drive gratis
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">✓</span> Stok tersedia
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">✓</span> Garansi resmi
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">✓</span> Lokasi Surabaya
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {car.tags && car.tags.length > 0 && (
              <div className="mt-4 lg:mt-6">
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {car.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
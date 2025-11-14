import Image from 'next/image';
import { Car } from '@/types/car';
import { Phone, MessageCircle, Settings, Fuel, Users, Luggage } from 'lucide-react';

interface CarHeroProps {
  car: Car;
}

export default function CarHero({ car }: CarHeroProps) {
  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop';

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
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Settings className="w-6 h-6 lg:w-8 lg:h-8 text-red-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Transmisi</div>
                    <div className="text-sm lg:text-base font-semibold">{car.variants[0]?.transmission}</div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Fuel className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Bahan Bakar</div>
                    <div className="text-sm lg:text-base font-semibold">{car.variants[0]?.fuelType}</div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-green-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Kapasitas</div>
                    <div className="text-sm lg:text-base font-semibold">{car.specs.capacity.seating}</div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-32 lg:w-auto bg-gray-800/50 rounded-lg p-3 lg:p-0 lg:bg-transparent">
                  <div className="flex flex-col items-center">
                    <Luggage className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-500 mb-1 lg:mb-2" />
                    <div className="text-xs lg:text-sm text-gray-400 mb-1">Bagasi</div>
                    <div className="text-sm lg:text-base font-semibold">{car.specs.capacity.luggage}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 lg:mb-8">
              <div className="text-gray-400 text-sm mb-2">Harga Mulai Dari</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600">
                {car.variants[0]?.priceFormatted}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
                {car.priceRange}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#variants"
                className="flex-1 bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center flex items-center justify-center gap-2"
              >
                <span>Lihat Semua Tipe</span>
              </a>
              
              <div className="flex flex-row gap-3">
                <a
                  href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}. Bisa info detail dan test drive?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                
                <a
                  href="tel:087852432636"
                  className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 transition text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Telepon</span>
                </a>
              </div>
            </div>

            {/* Additional Mobile Info */}
            <div className="mt-4 lg:mt-6 p-3 bg-gray-800/30 rounded-lg lg:hidden">
              <div className="text-xs text-gray-400 text-center">
                ✅ Test drive gratis • 📍 Surabaya • 🚗 Stok tersedia
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
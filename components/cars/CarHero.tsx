import Image from 'next/image';
import { Car } from '@/types/car';

interface CarHeroProps {
  car: Car;
}

export default function CarHero({ car }: CarHeroProps) {
  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop';

  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center py-8 lg:py-12">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="relative h-64 lg:h-96 bg-gray-800 rounded-2xl overflow-hidden">
              <Image
                src={car.images.main || fallbackImage}
                alt={car.name}
                fill
                className="object-cover"
                priority
                // HAPUS onError di sini
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {car.isNew && (
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    NEW
                  </span>
                )}
                {car.isFeatured && (
                  <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    FEATURED
                  </span>
                )}
              </div>
            </div>
          </div>

         
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {car.name}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {car.shortDescription}
            </p>
            
            {/* Quick Specs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl mb-1">⚙️</div>
                <div className="text-sm text-gray-400">Transmisi</div>
                <div className="font-semibold">{car.variants[0]?.transmission}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⛽</div>
                <div className="text-sm text-gray-400">Bahan Bakar</div>
                <div className="font-semibold">{car.variants[0]?.fuelType}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">👥</div>
                <div className="text-sm text-gray-400">Kapasitas</div>
                <div className="font-semibold">{car.specs.capacity.seating}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-sm text-gray-400">Bagasi</div>
                <div className="font-semibold">{car.specs.capacity.luggage}</div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-gray-400 text-sm mb-2">Harga Mulai Dari</div>
              <div className="text-3xl lg:text-4xl font-bold text-red-600">
                {car.variants[0]?.priceFormatted}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                {car.priceRange}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#variants"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center"
              >
                Lihat Semua Tipe
              </a>
              <a
                href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}. Bisa info detail dan test drive?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center"
              >
                💬 WhatsApp Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

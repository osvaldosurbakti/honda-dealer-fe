import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import Card from '@/components/ui/Card';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Fallback untuk data yang optional
  const transmission = car.variants[0]?.transmission || 'CVT';
  const fuelType = car.variants[0]?.fuelType || 'Bensin';
  const seating = car.specs?.capacity?.seating || '5 Seater';
  const engine = car.specs?.performance?.engine || '1.5L';

  return (
    <Card hover className="h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100 rounded-t-xl overflow-hidden">
        <Image
          src={car.images.main || '/images/car-placeholder.jpg'}
          alt={car.name}
          fill
          className="object-cover hover:scale-105 transition duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {car.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              NEW
            </span>
          )}
          {car.isFeatured && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              FEATURED
            </span>
          )}
        </div>
        
        {/* Type Count Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
            {car.typeCount} Tipe
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="grow p-4 flex flex-col">
        {/* Basic Info */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
            {car.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {car.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {car.category}
            </span>
            <span className="text-xs text-gray-500">
              {car.year}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Mulai dari</p>
          <p className="text-xl font-bold text-red-600">
            {formatPrice(car.startingPrice)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {car.priceRange}
          </p>
        </div>

        {/* Features Preview */}
        <div className="mb-4 grow">
          <div className="grid grid-cols-2 gap-1 text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <span>⚙️</span>
              <span>{transmission}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⛽</span>
              <span>{fuelType}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>👥</span>
              <span>{seating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🚀</span>
              <span className="truncate">{engine}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-auto">
          <Link 
            href={`/mobil/${car.slug}`}
            className="flex-1 bg-red-600 text-white text-center py-2 px-3 rounded-lg font-semibold hover:bg-red-700 transition text-sm"
          >
            Detail
          </Link>
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}. Bisa info lebih lanjut?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white text-center py-2 px-3 rounded-lg font-semibold hover:bg-green-600 transition text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Card>
  );
}
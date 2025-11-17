// components/home/CompactProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import Button from '@/components/ui/Button';
import { Star, Eye, Fuel, Settings } from 'lucide-react';

interface CompactProductCardProps {
  car: Car;
  className?: string;
}

export default function CompactProductCard({ car, className = '' }: CompactProductCardProps) {
  const firstVariant = car.variants[0];

  return (
    <div className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-300 overflow-hidden ${className}`}>
      {/* Image Section - More Compact */}
      <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {car.images?.main ? (
          <Image
            src={car.images.main}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-3xl mb-1">🚗</div>
              <p className="text-xs">{car.name}</p>
            </div>
          </div>
        )}
        
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {car.isNew && (
            <span className="bg-green-500 text-white px-2 py-0.5 text-xs font-bold rounded-full">
              NEW
            </span>
          )}
          {car.isFeatured && (
            <span className="bg-red-500 text-white px-2 py-0.5 text-xs font-bold rounded-full">
              HOT
            </span>
          )}
        </div>

        {/* Views */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-full flex items-center">
          <Eye className="w-3 h-3 mr-1" />
          {car.views}
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-lg shadow-lg">
            <div className="text-sm font-bold truncate">{car.priceRange}</div>
          </div>
        </div>
      </div>

      {/* Content Section - More Compact */}
      <div className="p-4">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-bold text-gray-900 text-sm line-clamp-1 mb-1">
            {car.name}
          </h3>
          <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
            <span>{car.category}</span>
            <span>{car.year}</span>
          </div>
          <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
            {car.shortDescription}
          </p>
        </div>

        {/* Quick Specs */}
        {firstVariant && (
          <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
            <div className="text-center">
              <div className="text-lg mb-0.5">⚙️</div>
              <span className="text-gray-600 capitalize">{firstVariant.transmission}</span>
            </div>
            <div className="text-center">
              <Fuel className="w-3 h-3 text-blue-500 mx-auto mb-0.5" />
              <span className="text-gray-600">{firstVariant.fuelType}</span>
            </div>
            <div className="text-center">
              <Settings className="w-3 h-3 text-green-500 mx-auto mb-0.5" />
              <span className="text-gray-600">{car.variants.length} varian</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={`/produk/${car.slug}`} className="flex-1">
            <Button 
              size="sm"
              variant="primary" 
              className="w-full bg-gray-900 hover:bg-gray-800 text-xs py-2"
            >
              Detail
            </Button>
          </Link>
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}. Bisa info lebih lanjut?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button 
              size="sm"
              variant="outline" 
              className="w-full border-green-500 text-green-600 hover:bg-green-50 text-xs py-2"
            >
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
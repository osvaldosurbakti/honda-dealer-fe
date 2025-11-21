import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import Button from '@/components/ui/Button';
import { 
  Eye,
  Car as CarIcon,
  ArrowRight
} from 'lucide-react';

interface ProductCardProps {
  car: Car;
  className?: string;
  compact?: boolean;
  size?: 'xs' | 'sm' | 'md'; // xs: 5 cards, sm: 3 cards, md: 2 cards
}

export default function ProductCard({ 
  car, 
  className = '', 
  compact = false,
  size = 'md' // default medium (2 cards di mobile)
}: ProductCardProps) {
  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price).replace(',00', '');
  };

  // Tentukan size berdasarkan compact flag atau explicit size prop
  const cardSize = compact ? 'xs' : size;

  // Extra Small - untuk 5 cards di desktop
  if (cardSize === 'xs') {
    return (
      <div className={`group bg-white rounded-lg shadow-xs hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-red-300 overflow-hidden w-full cursor-pointer select-none touch-manipulation ${className}`}>
        {/* Image Section */}
        <div className="relative h-24 sm:h-28 bg-gray-100 overflow-hidden">
          {car.images?.main ? (
            <Image
              src={car.images.main}
              alt={car.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-200">
              <CarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-1 left-1 sm:top-2 sm:left-2 flex gap-0.5 sm:gap-1">
            {car.isNew && (
              <span className="bg-green-500 text-white px-1 py-0.5 text-[9px] sm:text-[10px] font-bold rounded shadow-xs">
                NEW
              </span>
            )}
            {car.isFeatured && (
              <span className="bg-red-500 text-white px-1 py-0.5 text-[9px] sm:text-[10px] font-bold rounded shadow-xs">
                HOT
              </span>
            )}
          </div>

          {/* Views - Hide on mobile, show on tablet+ */}
          <div className="hidden sm:flex absolute top-1 right-1 sm:top-2 sm:right-2 bg-black/70 text-white text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 rounded-full items-center">
            <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5" />
            {car.views}
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2">
            <div className="bg-green-500/95 text-white px-1.5 sm:px-2 py-1 sm:py-1.5 rounded shadow-sm">
              <div className="text-[10px] sm:text-xs font-bold truncate text-center leading-tight">
                {formatPrice(car.startingPrice)
                  .replace('Rp', '')
                  .trim()}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-1.5 sm:p-2">
          <div className="mb-1.5 sm:mb-2">
            <h3 className="font-semibold text-gray-900 text-xs sm:text-sm line-clamp-1 mb-0.5 sm:mb-1 group-hover:text-red-600 transition-colors">
              {car.name}
            </h3>
            <div className="text-[10px] sm:text-xs text-gray-500 truncate">
              {car.category}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1 sm:gap-1.5">
            <Link 
              href={`/mobil/${car.slug}`} 
              className="flex-1 min-w-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                size="sm"
                variant="primary" 
                className="w-full bg-gray-800 hover:bg-gray-700 text-[10px] sm:text-xs py-1 h-6 sm:h-7 transition-all duration-200 active:scale-95"
              >
                <span className="truncate">Detail</span>
              </Button>
            </Link>
            <a
              href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                size="sm"
                variant="outline" 
                className="w-full border-green-500 text-green-600 hover:bg-green-50 text-[10px] sm:text-xs py-1 h-6 sm:h-7 transition-all duration-200 active:scale-95"
              >
                <span className="truncate">WA</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Small - untuk 3 cards di tablet
  if (cardSize === 'sm') {
    return (
      <div className={`group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-400 overflow-hidden w-full cursor-pointer select-none touch-manipulation ${className}`}>
        {/* Image Section */}
        <div className="relative h-28 sm:h-36 bg-gray-100 overflow-hidden">
          {car.images?.main ? (
            <Image
              src={car.images.main}
              alt={car.name}
              fill
              className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500 ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
              <CarIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1">
            {car.isNew && (
              <span className="bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold rounded sm:rounded-full shadow-sm">
                NEW
              </span>
            )}
            {car.isFeatured && (
              <span className="bg-red-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-bold rounded sm:rounded-full shadow-sm">
                HOT
              </span>
            )}
          </div>

          {/* Views */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center">
            <Eye className="w-3 h-3 mr-0.5 sm:mr-1" />
            {car.views}
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
            <div className="bg-green-500/95 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded shadow-sm sm:shadow-md">
              <div className="text-xs sm:text-sm font-bold truncate text-center">
                {formatPrice(car.startingPrice)}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-2 sm:p-3">
          <div className="mb-2 sm:mb-3">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1 mb-1 sm:mb-2 group-hover:text-red-600 transition-colors">
              {car.name}
            </h3>
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
              <span className="truncate">{car.category}</span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed hidden sm:block">
              {car.shortDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 sm:gap-2">
            <Link 
              href={`/mobil/${car.slug}`} 
              className="flex-1 min-w-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                size="sm"
                variant="primary" 
                className="w-full bg-gray-900 hover:bg-gray-800 text-xs sm:text-sm py-1.5 sm:py-2.5 transition-all duration-200 active:scale-95"
              >
                <span className="truncate">Detail</span>
              </Button>
            </Link>
            <a
              href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-0"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                size="sm"
                variant="outline" 
                className="w-full border-green-500 text-green-600 hover:bg-green-50 text-xs sm:text-sm py-1.5 sm:py-2.5 transition-all duration-200 active:scale-95"
              >
                <span className="truncate">WA</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Medium - untuk 2 cards di mobile (default)
  return (
    <div className={`group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-500 overflow-hidden w-full cursor-pointer select-none touch-manipulation ${className}`}>
      {/* Image Section */}
      <div className="relative h-32 sm:h-40 bg-gray-100 overflow-hidden">
        {car.images?.main ? (
          <Image
            src={car.images.main}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
            <CarIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1 sm:gap-2">
          {car.isNew && (
            <span className="bg-green-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded sm:rounded-full shadow-sm sm:shadow-md">
              NEW
            </span>
          )}
          {car.isFeatured && (
            <span className="bg-red-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold rounded sm:rounded-full shadow-sm sm:shadow-md">
              HOT
            </span>
          )}
        </div>

        {/* Views */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded-full flex items-center">
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
          {car.views}
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
          <div className="bg-green-500/95 text-white px-2 sm:px-4 py-2 sm:py-3 rounded shadow-md sm:shadow-lg">
            <div className="text-sm sm:text-base font-bold truncate text-center">
              {formatPrice(car.startingPrice)}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4">
        <div className="mb-3 sm:mb-4">
          <h3 className="font-bold text-gray-900 text-base sm:text-lg line-clamp-1 mb-1 sm:mb-2 group-hover:text-red-600 transition-colors">
            {car.name}
          </h3>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2 sm:mb-3">
            <span className="font-medium">{car.category}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {car.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3">
          <Link 
            href={`/mobil/${car.slug}`} 
            className="flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Button 
              size="sm"
              variant="primary" 
              className="w-full bg-gray-900 hover:bg-gray-800 text-sm py-2.5 sm:py-3 transition-all duration-200 active:scale-95"
            >
              <span className="hidden sm:inline">Lihat Detail</span>
              <span className="sm:hidden">Detail</span>
            </Button>
          </Link>
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Button 
              size="sm"
              variant="outline" 
              className="w-full border-green-500 text-green-600 hover:bg-green-50 text-sm py-2.5 sm:py-3 transition-all duration-200 active:scale-95"
            >
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">WA</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import Button from '@/components/ui/Button';
import { 
  Star, 
  Users, 
  Eye,
  Fuel,
  Settings,
  Car as CarIcon,
  MapPin,
  Zap,
  Shield,
  Calendar
} from 'lucide-react';

interface ProductCardProps {
  car: Car;
  className?: string;
  compact?: boolean;
}

export default function ProductCard({ car, className = '', compact = false }: ProductCardProps) {
  // Helper function to get transmission icon
  const getTransmissionIcon = (transmission: string) => {
    switch (transmission) {
      case 'Manual': return '🚗';
      case 'Automatic': return '⚡';
      case 'CVT': return '🔄';
      default: return '🚗';
    }
  };

  // Helper function to get fuel type color
  const getFuelTypeColor = (fuelType: string) => {
    switch (fuelType) {
      case 'Bensin': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Diesel': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Hybrid': return 'bg-green-100 text-green-800 border-green-200';
      case 'Electric': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price).replace(',00', '');
  };

  // Get first variant for quick info
  const firstVariant = car.variants[0];

  if (compact) {
    return (
      <div className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-300 overflow-hidden ${className}`}>
        {/* Image Section */}
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
              <CarIcon className="w-8 h-8" />
            </div>
          )}
          
          {/* Top Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {car.isNew && (
              <span className="bg-green-500 text-white px-2 py-0.5 text-xs font-bold rounded-full shadow-sm">
                NEW
              </span>
            )}
            {car.isFeatured && (
              <span className="bg-red-500 text-white px-2 py-0.5 text-xs font-bold rounded-full shadow-sm">
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
              <div className="text-sm font-bold truncate">{formatPrice(car.startingPrice)}</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Header */}
          <div className="mb-3">
            <h3 className="font-bold text-gray-900 text-sm line-clamp-1 mb-1">
              {car.name}
            </h3>
            <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
              <span className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {car.year}
              </span>
              <span>{car.category}</span>
            </div>
            <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
              {car.shortDescription}
            </p>
          </div>

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

  // Full version ProductCard
  return (
    <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-red-300 overflow-hidden ${className}`}>
      {/* Image Section */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {car.images?.main ? (
          <>
            <Image
              src={car.images.main}
              alt={car.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={car.isFeatured}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-gray-400">
              <CarIcon className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">{car.name}</p>
            </div>
          </div>
        )}
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {car.isNew && (
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>BARU</span>
            </span>
          )}
          {car.isFeatured && (
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
              <Star className="w-3 h-3 fill-current" />
              <span>FEATURED</span>
            </span>
          )}
        </div>

        {/* Right Side Info */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 text-sm font-semibold rounded-full border border-white/50">
            {car.category}
          </span>
          <div className="flex items-center bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            <Eye className="w-3 h-3 mr-1" />
            <span>{car.views}</span>
          </div>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl shadow-lg">
            <div className="text-sm font-bold">{formatPrice(car.startingPrice)}</div>
            <div className="text-xs opacity-90 flex justify-between items-center">
              <span>{car.variants.length} varian tersedia</span>
              <span>{car.priceRange}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
              {car.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {car.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/produk/${car.slug}`} className="flex-1">
            <Button 
              variant="primary" 
              className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 py-3 text-sm font-semibold"
            >
              Lihat Detail Lengkap
            </Button>
          </Link>
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name} ${car.model} ${car.year}. Bisa info lebih lanjut mengenai harga, spesifikasi, dan test drive?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button 
              variant="outline" 
              className="w-full border-green-500 text-green-600 hover:bg-green-50 py-3 text-sm font-semibold"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Chat WhatsApp</span>
                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              </span>
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}
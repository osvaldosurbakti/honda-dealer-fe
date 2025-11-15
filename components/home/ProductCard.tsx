import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  car: Car;
  className?: string;
}

export default function ProductCard({ car, className = '' }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="relative h-48 bg-gray-100">
        {car.images?.main ? (
          <Image
            src={car.images.main}
            alt={car.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-50 to-gray-100">
            <div className="text-center">
              <div className="text-4xl mb-2">🚗</div>
              <p className="text-gray-500 text-sm">Gambar {car.name}</p>
            </div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {car.isNew && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
              BARU
            </span>
          )}
          {car.isFeatured && (
            <span className="bg-blue-500 text-white px-2 py-1 text-xs font-semibold rounded">
              FEATURED
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {car.year}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {car.shortDescription}
        </p>

        {/* Price & Info */}
        <div className="mb-4">
          <div className="text-lg font-bold text-green-600 mb-1">
            {car.priceRange}
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{car.typeCount} tipe tersedia</span>
            <span>{car.views} dilihat</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {car.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {car.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              +{car.tags.length - 3}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link href={`/produk/${car.slug}`} className="flex-1">
            <Button variant="primary" className="w-full">
              Detail Mobil
            </Button>
          </Link>
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name} ${car.year}. Bisa info lebih lanjut mengenai harga dan spesifikasi?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" className="w-full">
              Konsultasi
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
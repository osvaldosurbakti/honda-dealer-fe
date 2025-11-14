import { Car } from '@/types/car';

interface CarQuickInfoProps {
  car: Car;
}

export default function CarQuickInfo({ car }: CarQuickInfoProps) {
  return (
    <section className="bg-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Basic Info */}
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-1">Kategori</div>
            <div className="font-semibold text-lg">{car.category}</div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-1">Tahun</div>
            <div className="font-semibold text-lg">{car.year}</div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-1">Tipe Tersedia</div>
            <div className="font-semibold text-lg">{car.typeCount} Varian</div>
          </div>
          
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-1">Dilihat</div>
            <div className="font-semibold text-lg">{car.views}x</div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">
            {car.description}
          </p>
        </div>
      </div>
    </section>
  );
}
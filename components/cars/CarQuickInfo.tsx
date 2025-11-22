import { Car } from '@/types/car';

interface CarQuickInfoProps {
  car: Car;
}

export default function CarQuickInfo({ car }: CarQuickInfoProps) {
  return (
    <section className="bg-white py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-gray-500 text-sm mb-2">KATEGORI</div>
            <div className="text-xl font-bold text-gray-900">{car.category}</div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-gray-500 text-sm mb-2">VARIAN TERSEDIA</div>
            <div className="text-xl font-bold text-gray-900">{car.typeCount} Pilihan</div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
            <div className="text-gray-500 text-sm mb-2">DILIHAT</div>
            <div className="text-xl font-bold text-gray-900">{car.views.toLocaleString()}x</div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {car.description}
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
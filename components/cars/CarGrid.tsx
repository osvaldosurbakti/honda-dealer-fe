import { Car } from '@/types/car';
import CarCard from './CarCard';

interface CarGridProps {
  cars: Car[];
  loading?: boolean;
}

export default function CarGrid({ cars, loading = false }: CarGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 h-64 rounded-xl"></div>
          </div>
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🚗</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Mobil tidak ditemukan
        </h3>
        <p className="text-gray-500">
          Coba gunakan filter yang berbeda atau hubungi Rendy untuk informasi lebih lanjut.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
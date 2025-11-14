'use client';

import { useState, useMemo } from 'react';
import { cars } from '@/data/cars';
import { Car } from '@/types/car';
import CarGrid from '@/components/cars/CarGrid';
import CarFilter from '@/components/cars/CarFilter';

export default function MobilPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [searchQuery, setSearchQuery] = useState('');

  // Stats untuk display
  const stats = useMemo(() => {
    const totalCars = cars.length;
    const totalModels = new Set(cars.map(car => car.model)).size;
    const totalCategories = new Set(cars.map(car => car.category)).size;

    return { totalCars, totalModels, totalCategories };
  }, []);

  const handleFilterChange = (filteredCars: Car[]) => {
    setFilteredCars(filteredCars);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Katalog Mobil Honda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Temukan mobil Honda impian Anda dengan berbagai pilihan model terbaru 
            dan teknologi canggih dari dealer resmi Honda Surabaya.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-honda-red">{stats.totalCars}</div>
              <div className="text-sm text-gray-600">Total Mobil</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-honda-red">{stats.totalModels}</div>
              <div className="text-sm text-gray-600">Model Tersedia</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-honda-red">{stats.totalCategories}</div>
              <div className="text-sm text-gray-600">Kategori</div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <CarFilter cars={cars} onFilterChange={handleFilterChange} />

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Semua Mobil Honda
            </h2>
            <p className="text-gray-600">
              Menampilkan {filteredCars.length} dari {cars.length} mobil
            </p>
          </div>
          
          {/* Sort Options (bisa dikembangkan nanti) */}
          <div className="hidden md:block">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honda-red">
              <option>Urutkan: Rekomendasi</option>
              <option>Harga: Terendah ke Tertinggi</option>
              <option>Harga: Tertinggi ke Terendah</option>
              <option>Nama: A-Z</option>
            </select>
          </div>
        </div>

        {/* Cars Grid */}
        <CarGrid cars={filteredCars} />

        {/* CTA Section */}
        {filteredCars.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tidak menemukan yang sesuai?
              </h3>
              <p className="text-gray-600 mb-6">
                Hubungi sales consultant kami untuk informasi lebih lengkap 
                tentang model, warna, dan ketersediaan unit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6287852432636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  💬 Chat WhatsApp
                </a>
                <a
                  href="tel:087852432636"
                  className="bg-honda-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  📞 Telepon Sekarang
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
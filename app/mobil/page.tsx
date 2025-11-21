'use client';

import { useState, useMemo } from 'react';
import { cars } from '@/data/cars';
import { Car } from '@/types/car';
import CarGrid from '@/components/cars/CarGrid';
import { 
  Search, 
  Filter, 
  Phone, 
  MessageCircle,
  Car as CarIcon,
  Shield,
  Award,
  Clock,
  Star,
  TrendingUp
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function MobilPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Stats untuk display
  const stats = useMemo(() => {
    const totalCars = cars.length;
    const totalModels = new Set(cars.map(car => car.model)).size;
    const totalCategories = new Set(cars.map(car => car.category)).size;
    const newCars = cars.filter(car => car.isNew).length;

    return { totalCars, totalModels, totalCategories, newCars };
  }, []);

  const handleFilterChange = (filteredCars: Car[]) => {
    setFilteredCars(filteredCars);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50/20">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-honda-red to-red-700 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Temukan Mobil <span className="text-yellow-300">Honda</span> Impian Anda
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Jelajahi berbagai pilihan model terbaru dengan teknologi canggih 
              dan penawaran spesial dari dealer resmi terpercaya.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">{stats.totalCars}+</div>
                <div className="text-sm text-white/80">Unit Tersedia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">{stats.totalModels}</div>
                <div className="text-sm text-white/80">Model</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">{stats.totalCategories}</div>
                <div className="text-sm text-white/80">Kategori</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Garansi Resmi 3 Tahun</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-honda-red" />
              <span>Dealer Authorized</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Service 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span>Harga Terbaik</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filter */}

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Semua Mobil Honda
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Menampilkan <span className="font-semibold text-honda-red">{filteredCars.length}</span> dari {cars.length} mobil tersedia
                  </p>
                </div>
                
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/6287852432636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Konsultasi Gratis</span>
                  </a>
                  <a
                    href="tel:087852432636"
                    className="bg-honda-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Telepon</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cars Grid */}
            <CarGrid cars={filteredCars} />

            {/* Empty State */}
            {filteredCars.length === 0 && (
              <div className="text-center py-16">
                <CarIcon className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mobil tidak ditemukan
                </h3>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                  Coba ubah filter pencarian Anda atau hubungi sales consultant untuk informasi lebih lanjut.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-honda-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Promo CTA Section */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-purple-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
                🎁 Penawaran Spesial
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Dapatkan Promo Eksklusif Hari Ini!
              </h3>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Free accessories, DP ringan, dan bunga spesial untuk pembelian mobil Honda. 
                Konsultasi kredit gratis dengan tim sales profesional kami.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free First Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>DP Mulai 10%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Garansi 3 Tahun</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6287852432636?text=Halo,%20saya%20ingin%20konsultasi%20promo%20mobil%20Honda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 text-lg shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Dapatkan Promo</span>
                </a>
                <a
                  href="tel:087852432636"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 text-lg shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Telepon Sekarang</span>
                </a>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <h4 className="text-2xl font-bold mb-2">Dealer Terpercaya</h4>
                <p className="text-white/80">1000+ Pelanggan Puas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
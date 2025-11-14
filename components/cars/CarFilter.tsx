'use client';

import { useState } from 'react';
import { Car } from '@/types/car';
import Card from '@/components/ui/Card';

interface CarFilterProps {
  cars: Car[];
  onFilterChange: (filteredCars: Car[]) => void;
}

type FilterState = {
  category: string;
  searchQuery: string;
};

export default function CarFilter({ cars, onFilterChange }: CarFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    searchQuery: '',
  });

  // Extract unique categories
  const categories = ['All', ...new Set(cars.map(car => car.category))];

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);

    // Apply filters
    let filtered = cars;

    // Search filter
    if (updatedFilters.searchQuery) {
      filtered = filtered.filter(car =>
        car.name.toLowerCase().includes(updatedFilters.searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(updatedFilters.searchQuery.toLowerCase()) ||
        car.description.toLowerCase().includes(updatedFilters.searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (updatedFilters.category && updatedFilters.category !== 'All') {
      filtered = filtered.filter(car => car.category === updatedFilters.category);
    }

    onFilterChange(filtered);
  };

  const clearFilters = () => {
    setFilters({ category: '', searchQuery: '' });
    onFilterChange(cars);
  };

  const hasActiveFilters = filters.category || filters.searchQuery;

  return (
    <Card className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari mobil Honda..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange({ searchQuery: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honda-red focus:border-transparent"
            />
            <span className="absolute right-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-4">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange({ category: e.target.value })}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-honda-red focus:border-transparent"
          >
            <option value="">Semua Kategori</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 text-gray-600 hover:text-gray-800 transition font-semibold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 flex items-center space-x-2 text-sm">
          <span className="text-gray-600">Filter aktif:</span>
          {filters.searchQuery && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              Search: "{filters.searchQuery}"
            </span>
          )}
          {filters.category && (
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Kategori: {filters.category}
            </span>
          )}
        </div>
      )}
    </Card>
  );
}
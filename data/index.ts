import { cars } from './cars';
import { Car } from '@/types/car';

// Export semua mobil
export { cars };

// Export helper functions
export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find((car: Car) => car.slug === slug);
};

export const getFeaturedCars = (): Car[] => {
  return cars.filter((car: Car) => car.isFeatured);
};

export const getNewCars = (): Car[] => {
  return cars.filter((car: Car) => car.isNew);
};

export const getCarsByCategory = (category: string): Car[] => {
  return cars.filter((car: Car) => car.category === category);
};

export const getAllCarSlugs = (): string[] => {
  return cars.map((car: Car) => car.slug);
};

export const getAllCars = (): Car[] => {
  return cars;
};

// Fungsi tambahan untuk mencari mobil
export const searchCars = (query: string): Car[] => {
  const lowerQuery = query.toLowerCase();
  return cars.filter((car: Car) => 
    car.name.toLowerCase().includes(lowerQuery) ||
    car.model.toLowerCase().includes(lowerQuery) ||
    car.tags.some((tag: string) => tag.toLowerCase().includes(lowerQuery)) ||
    car.category.toLowerCase().includes(lowerQuery)
  );
};

export const getCarsByPriceRange = (min: number, max: number): Car[] => {
  return cars.filter((car: Car) => 
    car.startingPrice >= min && car.startingPrice <= max
  );
};

// Export types
export * from '@/types/car';
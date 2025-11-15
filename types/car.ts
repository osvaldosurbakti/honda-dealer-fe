// Car Variant Type
export interface CarVariant {
  id: string;
  type: string;
  price: number;
  priceFormatted: string;
  features: string[];
  image?: string;
  transmission: 'Manual' | 'CVT' | 'Automatic';
  fuelType: 'Bensin' | 'Diesel' | 'Hybrid' | 'Electric';
  engineCapacity: string;
  available: boolean;
}

// Car Specifications Type
export interface CarSpecs {
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    weight: string;
  };
  performance: {
    engine: string;
    displacement: string;
    maxPower: string;
    maxTorque: string;
    transmission: string;
    fuelConsumption: string;
    acceleration: string;
    topSpeed: string;
  };
  capacity: {
    seating: string;
    fuelTank: string;
    luggage: string;
    doors: string;
  };
  features?: { // Made optional
    exterior: string[];
    interior: string[];
    safety: string[];
    entertainment: string[];
  };
}

// Car Feature Sections Type
export interface CarFeatureSections {
  exterior?: {
    title: string;
    description: string;
    features: string[];
    images: string[];
  };
  interior?: {
    title: string;
    description: string;
    features: string[];
    images: string[];
  };
  safety?: {
    title: string;
    description: string;
    features: string[];
    images: string[];
  };
  technology?: {
    title: string;
    description: string;
    features: string[];
    images: string[];
  };
}

// Main Car Type
export interface Car {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: 'Hatchback' | 'SUV' | 'Sedan' | 'MPV' | 'Sport';
  priceRange: string;
  startingPrice: number;
  typeCount: number;
  year: number;
  images: {
    main: string;
    gallery: string[];
    thumbnail: string;
    colorOptions: string[];
  };
  variants: CarVariant[];
  specs?: CarSpecs; // Made optional since some new cars don't have full specs
  features?: CarFeatureSections; // Made optional since some new cars don't have full features
  description: string;
  shortDescription: string;
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
  views: number;
  relatedCars: string[]; // slugs of related cars
  createdAt: string;
  updatedAt: string;
}

// Car Filter Type
export interface CarFilter {
  category?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  transmission?: string[];
  fuelType?: string[];
  searchQuery?: string;
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';
}

// Car Comparison Type
export interface CarComparison {
  cars: Car[];
  differences: {
    [key: string]: any[];
  };
}
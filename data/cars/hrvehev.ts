import {Car} from '@/types/car';

export const hrvehev: Car = 
  {
    id: 'hrv-e-hev-2024',
    slug: 'all-new-hr-v-e-hev',
    name: 'All New HR-V e:HEV',
    model: 'HR-V e:HEV',
    category: 'SUV',
    priceRange: 'Rp 450 - 500 Juta',
    startingPrice: 450000000,
    typeCount: 2,
    year: 2024,
    images: {
      main: '/images/cars/all-new-hr-v/main.jpg',
      gallery: [
        '/images/cars/all-new-hr-v-e-hev/gallery-1.jpg',
        '/images/cars/all-new-hr-v-e-hev/gallery-2.jpg',
        '/images/cars/all-new-hr-v-e-hev/gallery-3.jpg',
      ],
      thumbnail: '/images/cars/all-new-hr-v-e-hev/thumbnail.jpg',
      colorOptions: [
        '/images/cars/all-new-hr-v-e-hev/colors/blue.jpg',
        '/images/cars/all-new-hr-v-e-hev/colors/white.jpg',
        '/images/cars/all-new-hr-v-e-hev/colors/gray.jpg',
      ],
    },
    variants: [
      {
        id: 'hrv-e-hev-premium',
        type: 'ALL NEW HR-V e:HEV PREMIUM',
        price: 500000000,
        priceFormatted: 'Rp 500.000.000',
        features: [
          'Hybrid System',
          'Full LED Headlights',
          'Panoramic Sunroof',
          'Wireless Charger',
          'Honda SENSING',
          'Leather Seats',
        ],
        transmission: 'CVT',
        fuelType: 'Hybrid',
        engineCapacity: '1.5L',
        available: true,
      },
    ],
    description: 'All New HR-V e:HEV menghadirkan teknologi hybrid terbaru dengan efisiensi bahan bakar yang excellent dan performa responsif.',
    shortDescription: 'SUV hybrid dengan efisiensi bahan bakar excellent dan performa responsif.',
    tags: ['SUV', 'Hybrid', 'Eco-Friendly', 'Premium'],
    isFeatured: true,
    isNew: true,
    views: 1123,
    relatedCars: ['new-hr-v', 'all-new-cr-v'],
    createdAt: '2024-02-15',
    updatedAt: '2024-02-15',
  };
import { Car } from '@/types/car';

export const wrv: Car =
  {
    id: 'wrv-2024',
    slug: 'all-new-wr-v',
    name: 'All New WR-V',
    model: 'WR-V',
    category: 'SUV',
    priceRange: 'Rp 320 - 380 Juta',
    startingPrice: 320000000,
    typeCount: 4,
    year: 2024,
    images: {
      main: '/images/cars/all-new-wr-v/main.jpg',
      gallery: [
        '/images/cars/all-new-wr-v/gallery-1.jpg',
        '/images/cars/all-new-wr-v/gallery-2.jpg',
        '/images/cars/all-new-wr-v/gallery-3.jpg',
      ],
      thumbnail: '/images/cars/all-new-wr-v/thumbnail.jpg',
      colorOptions: [
        '/images/cars/all-new-wr-v/colors/red.jpg',
        '/images/cars/all-new-wr-v/colors/black.jpg',
        '/images/cars/all-new-wr-v/colors/white.jpg',
      ],
    },
    variants: [
      {
        id: 'wrv-e-cvt',
        type: 'ALL NEW WR-V E CVT',
        price: 320000000,
        priceFormatted: 'Rp 320.000.000',
        features: [
          'LED Headlights',
          '7-inch Touchscreen',
          'Keyless Entry',
          '4 Airbags',
          'Rear Camera',
        ],
        transmission: 'CVT',
        fuelType: 'Bensin',
        engineCapacity: '1.5L',
        available: true,
      },
    ],
    description: 'All New WR-V menghadirkan SUV compact dengan desain adventurous dan kapabilitas tangguh untuk petualangan urban.',
    shortDescription: 'SUV compact dengan desain adventurous untuk petualangan urban.',
    tags: ['SUV', 'Adventure', 'Compact', 'Urban'],
    isFeatured: true,
    isNew: true,
    views: 756,
    relatedCars: ['all-new-brio', 'new-hr-v'],
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01',
  };
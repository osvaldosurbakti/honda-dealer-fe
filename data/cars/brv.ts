import {Car} from '@/types/car';

export const brv: Car =   
  {
    id: 'brv-2024',
    slug: 'all-new-br-v',
    name: 'All New BR-V',
    model: 'BR-V',
    category: 'MPV',
    priceRange: 'Rp 280 - 350 Juta',
    startingPrice: 280000000,
    typeCount: 5,
    year: 2024,
    images: {
      main: '/images/cars/all-new-br-v/main.jpg',
      gallery: [
        '/images/cars/all-new-br-v/gallery-1.jpg',
        '/images/cars/all-new-br-v/gallery-2.jpg',
        '/images/cars/all-new-br-v/gallery-3.jpg',
      ],
      thumbnail: '/images/cars/all-new-br-v/thumbnail.jpg',
      colorOptions: [
        '/images/cars/all-new-br-v/colors/white.jpg',
        '/images/cars/all-new-br-v/colors/black.jpg',
        '/images/cars/all-new-br-v/colors/silver.jpg',
      ],
    },
    variants: [
      {
        id: 'brv-e-cvt',
        type: 'ALL NEW BR-V E CVT',
        price: 280000000,
        priceFormatted: 'Rp 280.000.000',
        features: [
          '7-Seater',
          'LED Headlights',
          'Touchscreen Display',
          'Rear AC',
          '4 Airbags',
        ],
        transmission: 'CVT',
        fuelType: 'Bensin',
        engineCapacity: '1.5L',
        available: true,
      },
    ],
    description: 'All New BR-V adalah MPV 7-seater dengan desain sporty dan ruang kabin yang luas, cocok untuk keluarga besar.',
    shortDescription: 'MPV 7-seater dengan desain sporty dan ruang luas untuk keluarga.',
    tags: ['MPV', '7-Seater', 'Family', 'Spacious'],
    isFeatured: true,
    isNew: true,
    views: 923,
    relatedCars: ['all-new-cr-v', 'all-new-hr-v'],
    createdAt: '2024-02-05',
    updatedAt: '2024-02-05',
  };
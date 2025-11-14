import { Car } from '@/types/car';

export const cars: Car[] = [
  {
    id: 'hrv-2024',
    slug: 'new-hr-v',
    name: 'New HR-V',
    model: 'HR-V',
    category: 'SUV',
    priceRange: 'Rp 403,8 - 492 Juta',
    startingPrice: 403800000,
    typeCount: 7,
    year: 2024,
    images: {
      main: '/images/cars/new-hr-v/main.jpg',
      gallery: [
        '/images/cars/new-hr-v/gallery-1.jpg',
        '/images/cars/new-hr-v/gallery-2.jpg',
        '/images/cars/new-hr-v/gallery-3.jpg',
        '/images/cars/new-hr-v/gallery-4.jpg',
      ],
      thumbnail: '/images/cars/new-hr-v/thumbnail.jpg',
      colorOptions: [
        '/images/cars/new-hr-v/colors/red.jpg',
        '/images/cars/new-hr-v/colors/black.jpg',
        '/images/cars/new-hr-v/colors/white.jpg',
        '/images/cars/new-hr-v/colors/gray.jpg',
      ],
    },
    variants: [
      {
        id: 'hrv-e-cvt',
        type: 'NEW HR-V E CVT',
        price: 403800000,
        priceFormatted: 'Rp 403.800.000',
        features: [
          'LED Headlights',
          '7-inch Touchscreen Display',
          'Keyless Entry',
          '6 Airbags',
          'Vehicle Stability Assist',
        ],
        transmission: 'CVT',
        fuelType: 'Bensin',
        engineCapacity: '1.5L',
        available: true,
      },
      {
        id: 'hrv-e-plus-cvt',
        type: 'NEW HR-V E+ CVT',
        price: 425900000,
        priceFormatted: 'Rp 425.900.000',
        features: [
          'LED Headlights with DRL',
          '8-inch Touchscreen Display',
          'Push Start Button',
          'Rear View Camera',
          'Parking Sensors',
        ],
        transmission: 'CVT',
        fuelType: 'Bensin',
        engineCapacity: '1.5L',
        available: true,
      },
      {
        id: 'hrv-e-hev',
        type: 'NEW HR-V e:HEV',
        price: 452900000,
        priceFormatted: 'Rp 452.900.000',
        features: [
          'Full LED Headlights',
          'Hybrid System',
          'Wireless Charger',
          'Panoramic Sunroof',
          'Honda SENSING',
        ],
        transmission: 'CVT',
        fuelType: 'Hybrid',
        engineCapacity: '1.5L',
        available: true,
      },
    ],
    specs: {
      dimensions: {
        length: '4385 mm',
        width: '1790 mm',
        height: '1590 mm',
        wheelbase: '2610 mm',
        weight: '1250 kg',
      },
      performance: {
        engine: '1.5L DOHC i-VTEC',
        displacement: '1498 cc',
        maxPower: '121 PS / 6600 rpm',
        maxTorque: '145 Nm / 4300 rpm',
        transmission: 'CVT dengan Earth Dreams Technology',
        fuelConsumption: '17,8 km/L',
        acceleration: '0-100 km/h dalam 11.2 detik',
        topSpeed: '185 km/jam',
      },
      capacity: {
        seating: '5 Seater',
        fuelTank: '40 Liter',
        luggage: '430 Liter (dapat diperluas hingga 1.200 Liter)',
        doors: '5 Pintu',
      },
      features: {
        exterior: ['LED Headlights', 'Power Retractable Mirrors', '17-inch Alloy Wheels'],
        interior: ['Floating Touchscreen', 'Digital Cluster', 'Leather Seats'],
        safety: ['6 Airbags', 'ABS + EBD', 'Vehicle Stability Assist'],
        entertainment: ['Apple CarPlay', 'Android Auto', '6 Speakers'],
      },
    },
    features: {
      exterior: {
        title: 'Desain Eksterior Modern & Sporty',
        description: 'HR-V generasi baru dengan desain lebih maskulin dan sporty, berkat penggunaan panel front grille dengan desain lebih lebar dan tebal, sebagai latar dari logo Honda. Garis-garis bodinya sendiri semakin mempertegas kesan SUV yang aerodinamis dan modern.',
        features: [
          'Full LED Headlights dengan LED Light Guide',
          'Two-Tone 17-inch Alloy Wheels',
          'Power Retractable Side Mirrors',
          'Chrome Front Grille',
          'LED Fog Lamps',
        ],
        images: [
          '/images/cars/new-hr-v/features/exterior-1.jpg',
          '/images/cars/new-hr-v/features/exterior-2.jpg',
        ],
      },
      interior: {
        title: 'Interior Mewah & Nyaman',
        description: 'Kabin yang didesain dengan material premium dan teknologi terkini untuk kenyamanan maksimal pengemudi dan penumpang. Dilengkapi dengan fitur-fitur canggih yang membuat setiap perjalanan menjadi lebih menyenangkan.',
        features: [
          'Floating 8-inch Touchscreen Display',
          'Digital Meter Cluster 7-inch',
          'Leather Seats dengan Electric Adjustment',
          'Dual Zone Automatic AC',
          'Panoramic Sunroof',
        ],
        images: [
          '/images/cars/new-hr-v/features/interior-1.jpg',
          '/images/cars/new-hr-v/features/interior-2.jpg',
        ],
      },
      safety: {
        title: 'Teknologi Keselamatan Terkini',
        description: 'Dilengkapi dengan Honda SENSING, suite teknologi keselamatan canggih yang memberikan perlindungan maksimal untuk pengemudi dan penumpang dalam berbagai kondisi berkendara.',
        features: [
          'Honda SENSING Safety Suite',
          '6 SRS Airbags',
          'Anti-lock Braking System (ABS)',
          'Vehicle Stability Assist (VSA)',
          'Hill Start Assist',
        ],
        images: [
          '/images/cars/new-hr-v/features/safety-1.jpg',
          '/images/cars/new-hr-v/features/safety-2.jpg',
        ],
      },
      technology: {
        title: 'Teknologi Canggih Masa Depan',
        description: 'Terintegrasi dengan berbagai fitur teknologi terkini yang membuat berkendara lebih aman, nyaman, dan terhubung dengan dunia digital.',
        features: [
          'Honda CONNECT dengan Telematics',
          'Wireless Apple CarPlay & Android Auto',
          'Wireless Charger',
          'Electric Parking Brake dengan Auto Brake Hold',
          'Multi-view Camera System',
        ],
        images: [
          '/images/cars/new-hr-v/features/technology-1.jpg',
          '/images/cars/new-hr-v/features/technology-2.jpg',
        ],
      },
    },
    description: 'New HR-V dengan desain terbaru yang lebih sporty dan teknologi canggih. SUV kompak yang sempurna untuk keluarga modern dengan kombinasi efisiensi bahan bakar, kenyamanan, dan fitur keselamatan terlengkap di kelasnya.',
    shortDescription: 'SUV kompak dengan desain modern dan teknologi canggih untuk keluarga urban.',
    tags: ['SUV', 'Family', 'City Car', 'Hybrid', 'Honda SENSING'],
    isFeatured: true,
    isNew: true,
    views: 1247,
    relatedCars: ['new-cr-v', 'new-br-v', 'wr-v'],
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 'brio-2024',
    slug: 'new-brio',
    name: 'New Brio',
    model: 'Brio',
    category: 'Hatchback',
    priceRange: 'Rp 182,1 - 250 Juta',
    startingPrice: 182100000,
    typeCount: 5,
    year: 2024,
    images: {
      main: '/images/cars/new-brio/main.jpg',
      gallery: [
        '/images/cars/new-brio/gallery-1.jpg',
        '/images/cars/new-brio/gallery-2.jpg',
        '/images/cars/new-brio/gallery-3.jpg',
      ],
      thumbnail: '/images/cars/new-brio/thumbnail.jpg',
      colorOptions: [
        '/images/cars/new-brio/colors/red.jpg',
        '/images/cars/new-brio/colors/blue.jpg',
        '/images/cars/new-brio/colors/white.jpg',
      ],
    },
    variants: [
      {
        id: 'brio-s-mt',
        type: 'Brio S MT',
        price: 182100000,
        priceFormatted: 'Rp 182.100.000',
        features: [
          'Front Dual SRS Airbags',
          'ABS dengan EBD',
          'Power Steering',
          'AC Manual',
          'Audio dengan USB',
        ],
        transmission: 'Manual',
        fuelType: 'Bensin',
        engineCapacity: '1.2L',
        available: true,
      },
      {
        id: 'brio-rs-mt',
        type: 'Brio RS MT',
        price: 215500000,
        priceFormatted: 'Rp 215.500.000',
        features: [
          'RS Body Kit',
          'Front Fog Lamps',
          '14-inch Alloy Wheels',
          'Touchscreen Audio',
          'Rear Parking Sensor',
        ],
        transmission: 'Manual',
        fuelType: 'Bensin',
        engineCapacity: '1.2L',
        available: true,
      },
    ],
    specs: {
      dimensions: {
        length: '3610 mm',
        width: '1680 mm',
        height: '1500 mm',
        wheelbase: '2345 mm',
        weight: '890 kg',
      },
      performance: {
        engine: '1.2L SOHC i-VTEC',
        displacement: '1198 cc',
        maxPower: '90 PS / 6000 rpm',
        maxTorque: '110 Nm / 4800 rpm',
        transmission: '5-speed Manual',
        fuelConsumption: '20,0 km/L',
        acceleration: '0-100 km/h dalam 13.5 detik',
        topSpeed: '160 km/jam',
      },
      capacity: {
        seating: '5 Seater',
        fuelTank: '35 Liter',
        luggage: '258 Liter',
        doors: '5 Pintu',
      },
      features: {
        exterior: ['Halogen Headlights', 'Body Color Bumper', '14-inch Steel Wheels'],
        interior: ['Fabric Seats', 'Manual AC', 'Standard Audio System'],
        safety: ['Dual Airbags', 'ABS + EBD', 'Rear Parking Sensor'],
        entertainment: ['USB Port', 'AUX Input', '4 Speakers'],
      },
    },
    features: {
      exterior: {
        title: 'Desain Kompak & Sporty',
        description: 'Brio dengan desain kompak yang lincah di kota, cocok untuk mobilitas sehari-hari dengan tampilan yang youthful dan energik.',
        features: [
          'Kompak dan mudah bermanuver',
          'Desain modern dan youthful',
          'RS variant dengan sporty look',
          'Efisien dalam konsumsi bahan bakar',
        ],
        images: [
          '/images/cars/new-brio/features/exterior-1.jpg',
          '/images/cars/new-brio/features/exterior-2.jpg',
        ],
      },
      interior: {
        title: 'Interior Fun & Functional',
        description: 'Kabin yang didesain dengan layout ergonomis dan space yang optimal untuk kenyamanan berkendara sehari-hari.',
        features: [
          'Desain dashboard modern',
          'Tempat penyimpanan yang praktis',
          'Kursi yang nyaman untuk perjalanan kota',
          'Kontrol yang mudah dijangkau',
        ],
        images: [
          '/images/cars/new-brio/features/interior-1.jpg',
          '/images/cars/new-brio/features/interior-2.jpg',
        ],
      },
      safety: {
        title: 'Safety untuk Keluarga',
        description: 'Dilengkapi dengan fitur keselamatan dasar yang penting untuk perlindungan pengemudi dan penumpang.',
        features: [
          'Dual SRS Airbags',
          'Anti-lock Braking System (ABS)',
          'Electronic Brake-force Distribution (EBD)',
          'Rear Parking Sensor',
        ],
        images: [
          '/images/cars/new-brio/features/safety-1.jpg',
          '/images/cars/new-brio/features/safety-2.jpg',
        ],
      },
      technology: {
        title: 'Teknologi untuk Kenyamanan',
        description: 'Fitur teknologi yang mendukung kenyamanan berkendara sehari-hari di perkotaan.',
        features: [
          'Touchscreen Audio System',
          'USB Charging Port',
          'Power Windows',
          'Central Door Lock',
        ],
        images: [
          '/images/cars/new-brio/features/technology-1.jpg',
          '/images/cars/new-brio/features/technology-2.jpg',
        ],
      },
    },
    description: 'New Brio adalah hatchback kompak yang sempurna untuk mobilitas perkotaan. Dengan desain yang fun dan youthful, Brio menawarkan efisiensi bahan bakar yang excellent dan kemudahan bermanuver di jalanan kota yang padat.',
    shortDescription: 'Hatchback kompak yang fun dan efisien untuk mobilitas perkotaan.',
    tags: ['Hatchback', 'City Car', 'Economical', 'Compact'],
    isFeatured: true,
    isNew: false,
    views: 865,
    relatedCars: ['new-hr-v', 'wr-v'],
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
  },
  {
    id: 'crv-2024',
    slug: 'new-cr-v',
    name: 'New CR-V',
    model: 'CR-V',
    category: 'SUV',
    priceRange: 'Rp 828,7 - 950 Juta',
    startingPrice: 828700000,
    typeCount: 3,
    year: 2024,
    images: {
      main: '/images/cars/new-cr-v/main.jpg',
      gallery: [
        '/images/cars/new-cr-v/gallery-1.jpg',
        '/images/cars/new-cr-v/gallery-2.jpg',
        '/images/cars/new-cr-v/gallery-3.jpg',
        '/images/cars/new-cr-v/gallery-4.jpg',
      ],
      thumbnail: '/images/cars/new-cr-v/thumbnail.jpg',
      colorOptions: [
        '/images/cars/new-cr-v/colors/black.jpg',
        '/images/cars/new-cr-v/colors/white.jpg',
        '/images/cars/new-cr-v/colors/silver.jpg',
        '/images/cars/new-cr-v/colors/blue.jpg',
      ],
    },
    variants: [
      {
        id: 'crv-e-cvt',
        type: 'CR-V E CVT',
        price: 828700000,
        priceFormatted: 'Rp 828.700.000',
        features: [
          'LED Headlights dengan DRL',
          '18-inch Alloy Wheels',
          '7-inch Touchscreen',
          'Honda SENSING',
          'Electric Parking Brake',
        ],
        transmission: 'CVT',
        fuelType: 'Bensin',
        engineCapacity: '1.5L Turbo',
        available: true,
      },
      {
        id: 'crv-e-hev',
        type: 'CR-V e:HEV',
        price: 899000000,
        priceFormatted: 'Rp 899.000.000',
        features: [
          'Full LED Headlights',
          'Hybrid System',
          '9-inch Touchscreen',
          'Wireless Charger',
          'Panoramic Sunroof',
        ],
        transmission: 'CVT',
        fuelType: 'Hybrid',
        engineCapacity: '2.0L',
        available: true,
      },
    ],
    specs: {
      dimensions: {
        length: '4703 mm',
        width: '1864 mm',
        height: '1680 mm',
        wheelbase: '2700 mm',
        weight: '1580 kg',
      },
      performance: {
        engine: '1.5L VTEC Turbo',
        displacement: '1498 cc',
        maxPower: '190 PS / 5500 rpm',
        maxTorque: '243 Nm / 1700-5000 rpm',
        transmission: 'CVT dengan Paddle Shift',
        fuelConsumption: '14,2 km/L',
        acceleration: '0-100 km/h dalam 9.5 detik',
        topSpeed: '200 km/jam',
      },
      capacity: {
        seating: '7 Seater',
        fuelTank: '53 Liter',
        luggage: '462 Liter (dapat diperluas hingga 1.106 Liter)',
        doors: '5 Pintu',
      },
      features: {
        exterior: ['Full LED Headlights', 'Power Tailgate', '18-inch Alloy Wheels'],
        interior: ['Leather Seats', 'Dual Zone AC', 'Power Seats'],
        safety: ['Honda SENSING', '6 Airbags', '360 Camera'],
        entertainment: ['Premium Audio', 'Apple CarPlay', 'Android Auto'],
      },
    },
    features: {
      exterior: {
        title: 'Desain Premium & Elegan',
        description: 'CR-V dengan desain yang lebih premium dan elegan, menampilkan karakter SUV yang kuat namun tetap sophisticated dengan garis-garis yang tegas dan modern.',
        features: [
          'Full LED Headlights dengan Sequential Turn Signal',
          '18-inch Premium Alloy Wheels',
          'Power Tailgate dengan Hands-free Access',
          'Chrome Accents',
          'Roof Rails',
        ],
        images: [
          '/images/cars/new-cr-v/features/exterior-1.jpg',
          '/images/cars/new-cr-v/features/exterior-2.jpg',
        ],
      },
      interior: {
        title: 'Interior Luxury & Spacious',
        description: 'Kabin yang luas dan mewah dengan material premium, menawarkan kenyamanan tertinggi untuk semua penumpang dalam setiap perjalanan.',
        features: [
          'Leather Seats dengan Heated & Ventilated Function',
          '9-inch Advanced Touchscreen',
          'Digital Meter Cluster 10.2-inch',
          'Panoramic Glass Roof',
          'Tri-Zone Automatic Climate Control',
        ],
        images: [
          '/images/cars/new-cr-v/features/interior-1.jpg',
          '/images/cars/new-cr-v/features/interior-2.jpg',
        ],
      },
      safety: {
        title: 'Safety Technology Terdepan',
        description: 'Dilengkapi dengan Honda SENSING terbaru yang memberikan perlindungan komprehensif dengan berbagai fitur keselamatan canggih.',
        features: [
          'Honda SENSING 360',
          '8 SRS Airbags',
          '360-degree Camera System',
          'Blind Spot Information System',
          'Cross Traffic Monitor',
        ],
        images: [
          '/images/cars/new-cr-v/features/safety-1.jpg',
          '/images/cars/new-cr-v/features/safety-2.jpg',
        ],
      },
      technology: {
        title: 'Advanced Technology Suite',
        description: 'Terintegrasi dengan teknologi paling mutakhir untuk pengalaman berkendara yang terhubung, aman, dan menyenangkan.',
        features: [
          'Honda CONNECT dengan 4G LTE',
          'Wireless Apple CarPlay & Android Auto',
          'Head-up Display',
          '12-speaker Premium Audio System',
          'Wireless Smartphone Charger',
        ],
        images: [
          '/images/cars/new-cr-v/features/technology-1.jpg',
          '/images/cars/new-cr-v/features/technology-2.jpg',
        ],
      },
    },
    description: 'New CR-V adalah SUV premium dengan desain yang elegan dan teknologi canggih. Menawarkan kenyamanan terbaik, performa yang powerful, dan fitur keselamatan terlengkap untuk keluarga modern yang mengutamakan kualitas dan keamanan.',
    shortDescription: 'SUV premium dengan teknologi canggih dan kenyamanan terbaik untuk keluarga.',
    tags: ['SUV', 'Premium', 'Family', '7-Seater', 'Hybrid'],
    isFeatured: true,
    isNew: true,
    views: 892,
    relatedCars: ['new-hr-v', 'new-br-v'],
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20',
  },
];

// Helper functions
export const getCarBySlug = (slug: string): Car | undefined => {
  return cars.find(car => car.slug === slug);
};

export const getFeaturedCars = (): Car[] => {
  return cars.filter(car => car.isFeatured);
};

export const getNewCars = (): Car[] => {
  return cars.filter(car => car.isNew);
};

export const getCarsByCategory = (category: string): Car[] => {
  return cars.filter(car => car.category === category);
};

export const getAllCarSlugs = (): string[] => {
  return cars.map(car => car.slug);
};
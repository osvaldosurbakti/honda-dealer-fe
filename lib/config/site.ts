export interface SiteConfig {
  // Basic Site Information
  name: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  baseUrl: string;
  logo: string;
  logoWhite?: string;
  favicon: string;

  // Company Information
  company: {
    name: string;
    legalName: string;
    description: string;
    foundingYear: number;
    dealerCode: string;
    address: {
      street: string;
      city: string;
      province: string;
      postalCode: string;
      country: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    contact: {
      phone: string;
      phoneFormatted: string;
      whatsapp: string;
      email: string;
      emergencyContact: string;
    };
    operatingHours: {
      [key: string]: string;
    };
    paymentMethods: string[];
    services: string[];
    certifications: string[];
  };

  // SEO Configuration
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    titleSeparator: string;
    defaultDescription: string;
    siteLanguage: string;
    locale: string;
    twitterHandle: string;
    openGraph: {
      type: string;
      siteName: string;
      profile: {
        firstName: string;
        lastName: string;
        username: string;
      };
    };
    robots: {
      index: boolean;
      follow: boolean;
      nocache: boolean;
      googleBot: {
        index: boolean;
        follow: boolean;
        'max-video-preview': number;
        'max-image-preview': string;
        'max-snippet': number;
      };
    };
    structuredData: {
      enable: boolean;
      organization: boolean;
      localBusiness: boolean;
      carDealer: boolean;
      product: boolean;
      breadcrumb: boolean;
    };
    sitemap: {
      priority: {
        home: number;
        cars: number;
        newCars: number;
        usedCars: number;
        blog: number;
        contact: number;
        promo: number;
      };
      changefreq: {
        home: string;
        cars: string;
        blog: string;
        contact: string;
      };
    };
  };

  // Social Media Links
  social: {
    facebook: string;
    instagram?: string;
    tiktok: string;
    youtube?: string;
    linkedin?: string;
    twitter?: string;
  };

  // Contact Configuration
  contact: {
    form: {
      successMessage: string;
      errorMessage: string;
      timeout: number;
    };
    whatsapp: {
      defaultMessage: string;
      autoOpen: boolean;
      businessHours: boolean;
    };
    phone: {
      primary: string;
      sales: string;
      service: string;
      sparepart: string;
    };
  };

  // Features Configuration
  features: {
    promotionSystem: boolean;
    bookingTestDrive: boolean;
    carComparison: boolean;
    financeCalculator: boolean;
    inventoryManagement: boolean;
    liveChat: boolean;
  };

  // API Configuration
  api: {
    baseUrl: string;
    timeout: number;
    endpoints: {
      contact: string;
      mobil: string;
      blog: string;
      testDrive: string;
      promo: string;
      inventory: string;
    };
    caching: {
      enabled: boolean;
      duration: number;
    };
  };

  // Analytics Configuration
  analytics: {
    googleAnalyticsId?: string;
    googleTagManagerId?: string;
    hotjarId?: string;
    microsoftClarityId?: string;
    facebookPixelId?: string;
    tiktokPixelId?: string;
  };

  // Performance Configuration
  performance: {
    imageOptimization: boolean;
    lazyLoading: boolean;
    preloadCriticalAssets: boolean;
    compression: boolean;
    cacheStrategy: 'aggressive' | 'moderate' | 'minimal';
    cdnEnabled: boolean;
  };

  // Content Strategy
  content: {
    blog: {
      categories: string[];
      tags: string[];
      postingFrequency: string;
      featuredAuthors: string[];
    };
    cars: {
      brands: string[];
      bodyTypes: string[];
      fuelTypes: string[];
      transmissions: string[];
    };
  };

  // Local SEO
  localSeo: {
    serviceAreas: string[];
    cities: string[];
    regions: string[];
    landmarks: string[];
    competitors: string[];
  };
}

export const siteConfig: SiteConfig = {
  // Basic Site Information
  name: 'Rendy Pambajeng Honda Surabaya',
  title: 'Dealer Resmi Honda Surabaya - Honda Prisma HR Muhammad',
  description: 'Dealer resmi Honda di Surabaya Timur. Penjualan mobil Honda baru & bekas: HR-V, CR-V, Brio, Civic, City, Mobilio. Kredit DP 10%, test drive gratis, promo spesial setiap bulan. Service & spare part original.',
  keywords: [
    'honda surabaya', 'dealer honda surabaya', 'mobil honda surabaya', 'hr-v surabaya', 'cr-v surabaya',
    'brio surabaya', 'civic surabaya', 'kredit mobil honda', 'test drive honda', 'honda surabaya timur',
    'dealer honda hr muhammad', 'honda prisma surabaya', 'jual mobil honda surabaya', 'showroom honda surabaya',
    'service honda surabaya', 'spare part honda', 'promo honda surabaya', 'honda surabaya murah',
    'honda surabaya terpercaya', 'rendy honda surabaya', 'honda surabaya pusat'
  ],
  author: 'Rendy Pambajeng - Sales Executive Honda Surabaya',
  url: 'https://hondaprismasurabaya.com',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://hondaprismasurabaya.com',
  logo: '/images/logo/honda-dealer-logo.png',
    logoWhite: '/images/logos/honda-logo-white.svg', // optional
  favicon: '/favicon.ico',

  // Company Information
  company: {
    name: 'Rendy Honda Surabaya',
    legalName: 'PT. Honda Prisma - Authorized Honda Dealer Surabaya',
    description: 'Dealer resmi Honda terpercaya di Surabaya Timur dengan pengalaman lebih dari 10 tahun melayani masyarakat Jawa Timur. Menyediakan mobil Honda baru & bekas berkualitas dengan pelayanan terbaik, promo menarik, dan after-sales service profesional.',
    foundingYear: 2010,
    dealerCode: 'HND-PRS-SBY',
    address: {
      street: 'Jl. HR Muhammad No. 123',
      city: 'Surabaya',
      province: 'Jawa Timur',
      postalCode: '60271',
      country: 'Indonesia',
      coordinates: {
        latitude: -7.250445,
        longitude: 112.768845
      }
    },
    contact: {
      phone: '+6231-1234-5678',
      phoneFormatted: '(031) 1234-5678',
      whatsapp: '+6281234567890',
      email: 'info@hondaprismasurabaya.com',
      emergencyContact: '+6281234567891'
    },
    operatingHours: {
      'Senin-Jumat': '08:00 - 17:00',
      'Sabtu': '08:00 - 15:00',
      'Minggu': '09:00 - 14:00'
    },
    paymentMethods: [
      'Cash', 'Transfer Bank', 'Kredit Multifinance', 'Leasing',
      'BCA Finance', 'Adira Finance', 'BRI Finance', 'Mandiri Finance'
    ],
    services: [
      'Penjualan Mobil Baru', 'Penjualan Mobil Bekas', 'Test Drive Gratis',
      'Konsultasi Kredit', 'Service & Maintenance', 'Spare Part Original',
      'Body Repair', 'Car Insurance', 'Trade-In Program'
    ],
    certifications: [
      'Authorized Honda Dealer', 'ISO 9001:2015', 'Honda Quality Award',
      'Best Sales Performance 2023', 'Customer Service Excellence'
    ]
  },

  // SEO Configuration
  seo: {
    titleTemplate: '%s | Rendy Pambajeng - Dealer Resmi Honda Surabaya',
    defaultTitle: 'Dealer Resmi Honda Surabaya - Honda Prisma HR Muhammad | Penjualan & Service',
    titleSeparator: '|',
    defaultDescription: 'Dealer resmi Honda di Surabaya Timur. Mobil baru Honda HR-V, CR-V, Brio, Civic, City. Kredit DP 10%, test drive gratis, promo spesial. Service & spare part original.',
    siteLanguage: 'id',
    locale: 'id_ID',
    twitterHandle: '@rendyhondasby',
    openGraph: {
      type: 'website',
      siteName: 'Rendy Pambajeng Honda Surabaya',
      profile: {
        firstName: 'Rendy',
        lastName: 'Pambajeng',
        username: 'rendyhondasurabaya'
      }
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    structuredData: {
      enable: true,
      organization: true,
      localBusiness: true,
      carDealer: true,
      product: true,
      breadcrumb: true
    },
    sitemap: {
      priority: {
        home: 1.0,
        cars: 0.9,
        newCars: 0.9,
        usedCars: 0.8,
        blog: 0.7,
        contact: 0.6,
        promo: 0.8
      },
      changefreq: {
        home: 'daily',
        cars: 'weekly',
        blog: 'daily',
        contact: 'monthly'
      }
    }
  },

  // Social Media Links
  social: {
    facebook: 'https://www.facebook.com/share/1CThcKHE5Z/',
    instagram: 'https://instagram.com/rendyhondasurabaya',
    tiktok: 'https://tiktok.com/@rendyhondasurabaya',
    youtube: 'https://youtube.com/@rendyhondasurabaya',
    linkedin: 'https://linkedin.com/company/rendy-honda-surabaya'
  },

  // Contact Configuration
  contact: {
    form: {
      successMessage: 'Terima kasih! Pesan Anda telah kami terima. Tim sales kami akan menghubungi Anda dalam 1x24 jam pada jam kerja.',
      errorMessage: 'Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung via WhatsApp di 0812-3456-7890.',
      timeout: 10000
    },
    whatsapp: {
      defaultMessage: 'Halo Rendy Honda Surabaya, saya tertarik dengan mobil Honda. Bisa info harga, promo, dan test drive?',
      autoOpen: true,
      businessHours: true
    },
    phone: {
      primary: '+6231-1234-5678',
      sales: '+6281234567890',
      service: '+6281234567892',
      sparepart: '+6281234567893'
    }
  },

  // Features Configuration
  features: {
    promotionSystem: true,
    bookingTestDrive: true,
    carComparison: true,
    financeCalculator: true,
    inventoryManagement: true,
    liveChat: true
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 15000,
    endpoints: {
      contact: '/kontak',
      mobil: '/mobil',
      blog: '/blog',
      testDrive: '/test-drive',
      promo: '/promo',
      inventory: '/inventory'
    },
    caching: {
      enabled: true,
      duration: 300000 // 5 minutes
    }
  },

  // Analytics Configuration
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
    microsoftClarityId: process.env.NEXT_PUBLIC_CLARITY_ID,
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID
  },

  // Performance Configuration
  performance: {
    imageOptimization: true,
    lazyLoading: true,
    preloadCriticalAssets: true,
    compression: true,
    cacheStrategy: 'aggressive',
    cdnEnabled: true
  },

  // Content Strategy
  content: {
    blog: {
      categories: ['Tips & Perawatan', 'Review Mobil', 'Promo & Event', 'Berita Honda', 'After Sales'],
      tags: ['honda hrv', 'honda crv', 'honda brio', 'honda civic', 'perawatan mobil', 'tips kredit', 'test drive', 'promo surabaya'],
      postingFrequency: '3 posts per week',
      featuredAuthors: ['Rendy Sales', 'Sari Test Drive', 'Ahmad Comparo', 'Budi EcoDrive']
    },
    cars: {
      brands: ['Honda'],
      bodyTypes: ['SUV', 'MPV', 'Hatchback', 'Sedan', 'City Car'],
      fuelTypes: ['Bensin', 'Hybrid', 'Listrik'],
      transmissions: ['Automatic', 'Manual', 'CVT']
    }
  },

  // Local SEO
  localSeo: {
    serviceAreas: ['Surabaya', 'Sidoarjo', 'Gresik', 'Mojokerto', 'Lamongan'],
    cities: ['Surabaya', 'Sidoarjo', 'Gresik', 'Bangkalan', 'Mojokerto'],
    regions: ['Surabaya Timur', 'Surabaya Pusat', 'Surabaya Barat', 'Surabaya Utara', 'Surabaya Selatan'],
    landmarks: ['HR Muhammad', 'Raya Darmo', 'Pasar Atom', 'Tunjungan Plaza', 'Grand City'],
    competitors: [
      'honda surabaya barat',
      'honda surabaya pusat',
      'honda surabaya selatan',
      'astra honda surabaya'
    ]
  }
};

// Enhanced Helper functions
export const getFullTitle = (pageTitle?: string): string => {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return siteConfig.seo.titleTemplate.replace('%s', pageTitle);
};

export const getMetaDescription = (description?: string): string => {
  return description || siteConfig.seo.defaultDescription;
};

export const getCanonicalUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
};

export const generateKeywords = (additionalKeywords: string[] = []): string[] => {
  return [...siteConfig.keywords, ...additionalKeywords];
};

export const getStructuredData = (type: 'organization' | 'localBusiness' | 'product' = 'organization') => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type === 'organization' ? 'AutomotiveBusiness' : 
             type === 'localBusiness' ? 'CarDealer' : 'Product',
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    telephone: siteConfig.company.contact.phone,
    email: siteConfig.company.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address.street,
      addressLocality: siteConfig.company.address.city,
      addressRegion: siteConfig.company.address.province,
      postalCode: siteConfig.company.address.postalCode,
      addressCountry: siteConfig.company.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.company.address.coordinates.latitude,
      longitude: siteConfig.company.address.coordinates.longitude
    },
    openingHours: Object.entries(siteConfig.company.operatingHours).map(
      ([day, hours]) => `${day} ${hours}`
    ),
    priceRange: '$$',
    knowsAbout: siteConfig.company.services
  };

  return baseData;
};

export const getSocialLinks = () => {
  return Object.entries(siteConfig.social)
    .filter(([_, url]) => url)
    .map(([platform, url]) => ({
      platform,
      url,
      name: platform.charAt(0).toUpperCase() + platform.slice(1)
    }));
};

// Export untuk easy access
export const {
  name,
  title,
  description,
  url,
  company,
  seo,
  social,
  contact,
  features,
  analytics,
  performance
} = siteConfig;